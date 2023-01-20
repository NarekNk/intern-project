import { useEffect, useState, useCallback } from "react";
import { Product } from "../interfaces";
import productsService from "../service/productsService";
import { useSearchParams } from 'react-router-dom';

const useProducts = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<Product | any>([]);
    const query = new URLSearchParams(window.location.search);
    const [page, setPage] = useState(Number(query.get('page')) || 1);
    const [id, setId] = useState<number>();
    const [totalItemCount, setTotalItemCount] = useState(1);
    const [, setSearchParams] = useSearchParams();

    const fetchProducts = useCallback(async () => {
        try {
            setLoading(true);
            const data = await productsService.getProducts(page).catch(err => setProducts([]));
            
            setTotalItemCount(data.total);
            
            setProducts(data.data);
        } finally {
            setLoading(false);
        }
    }, [page]);

    useEffect(() => {
        setSearchParams({
            page: page.toString()
        });
        if(!id) {
            fetchProducts();
        } else {
            productsService.getProduct(id)
                .then((res) => setProducts([res.data]))
                .catch(() => setProducts([]));
        }
    }, [page, id, fetchProducts, setSearchParams]);

    return {
        products,
        page,
        setPage,
        totalItemCount,
        id,
        setId,
        loading
    }
}

export default useProducts;