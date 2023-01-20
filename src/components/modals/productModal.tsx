import React, { FC, useState } from "react";
import { Modal } from "antd";
import { Product } from "../../interfaces";

interface ProductModalProps {
    product: Product;
}

const ProductModal: FC<ProductModalProps> = ({product}) => {
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Modal 
            open={open}
            destroyOnClose 
            onCancel={handleClose}
            footer={<></>}
        >
            <div>
                Id - {product.id}
            </div>
            <div>
                Name - {product.name}
            </div>
            <div>
                Pantone Value - {product.pantone_value}
            </div>
            <div>
                Year - {product.year}
            </div>
        </Modal>
    );
}

export default ProductModal;