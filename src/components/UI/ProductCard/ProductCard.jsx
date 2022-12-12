import React from 'react';

import { toast } from 'react-toastify';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {cartActions} from "../../../redux/slices/cartSlice";
import {motion} from "framer-motion";
import '@styles/product-card.scss'
import {useTranslation} from "react-i18next";

const ProductCard = ({item}) => {

    const dispatch = useDispatch()
    const {t} = useTranslation();
    const addToCart = () => {
        dispatch(cartActions.addItem({
                id: item.id,
                productName: item.productName,
                price: item.price,
                imgUrl: item.imgUrl
            })
        );
        toast.success("Product added successfully")
    }

    return (
        <div className="col-3 product__column">
            <div className="product">
                <div className="product__img">
                    <img className="product__image" src={item.imgUrl} alt=""/>
                </div>
                <div className="product__info">
                    <h3 className="product__name"><Link className="product__link" to={`/shop/${item.id}`}>{t(`${item.productName}.1`)}</Link></h3>
                    <span className="product__category">{t(`${item.category}.1`)}</span>
                </div>
                <div className="product__card__bottom">
                    <span className="product__price">${item.price}</span>
                    <motion.span whileTap={{scale: 1.2}} onClick={addToCart} className="product__plus"><i className="ri-add-line"></i></motion.span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;