import { notification } from 'antd';
import axios from 'axios';
const url = 'https://reqres.in/api/products';

class ProductsService {

    async getProducts(page: number = 1, perPage: number = 5) {
        try {
            const { data } = await axios.get(`${url}?page=${page}&per_page=${perPage}`);
            return data;
        } catch(err: any) {
            notification.error({
                message: err.message,
                duration: 1000
            });
            console.error(err);
        }
    }
    
    async getProduct(id: number) {
        try {
            const { data } = await axios.get(`${url}/${id}`);
            
            return data;
        } catch(err: any) {
            notification.error({
                message: err.message,
                duration: 1000
            });
            console.error(err);
        }
    }

}

const productsService = new ProductsService();

export default productsService;