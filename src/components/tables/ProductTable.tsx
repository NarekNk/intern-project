import React from "react"
import { AiOutlineSearch } from 'react-icons/ai';
import { Pagination, Table } from "antd";
import useProducts from "../../hooks/useProducts";
import { Product } from "../../interfaces";
import ProductModal from "../modals/productModal";
import { usePopupManager } from 'react-popup-manager';

const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      render(val: string, record: Product) {
        return {
            props: {
            style: { background: record.color },
          },
            children: <div>{val}</div>,
        };
      },
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render(val: string, record: Product) {
        return {
            props: {
            style: { background: record.color },
          },
            children: <div>{val}</div>,
        };
      },
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      render(val: string, record: Product) {
        return {
            props: {
            style: { background: record.color },
          },
            children: <div>{val}</div>,
        };
      },
    },
];

const ProductTable = () => {
    const { products, page, setPage, totalItemCount, id, setId, loading } = useProducts();

    const popupManager = usePopupManager();

    const onRow = (record: any, rowIndex: any) => {
        return {
        onClick: (event: any) => {
            popupManager.open(ProductModal, {
            product: record,
            })
        },
        };
    }
    return (
        <div className="products">
            <h1>Products</h1>
            <div className="products__filter">
                <AiOutlineSearch className="products__filter__search-icon"/>
                <input
                    type="number"
                    value={id || ''}
                    onChange={(e) => {
                        if(!e.target.value) {
                            setId(undefined);
                        }
                        if(isNaN(+e.target.value)) return;
                        setId(+e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if(e.key === '.') e.preventDefault();
                    }}
                    className="products__filter__input" 
                    min={1}
                    step={1}
                    placeholder="Search by id"
                />
            </div>
            <Table<Product>
                className="products__table"
                dataSource={products}
                columns={columns}
                rowKey={(record) => record.id}
                loading={loading}
                onRow={onRow}
                bordered
                pagination={false}
            />
          <Pagination total={totalItemCount} pageSize={5} onChange={(i) => setPage(i)} current={page} />
        </div>
    )
}

export default ProductTable;