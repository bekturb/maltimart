import React from 'react';

import Helmet from "../../layout/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import {motion} from "framer-motion";
import { cartActions} from "../../redux/slices/cartSlice";
import {useSelector, useDispatch} from "react-redux";

import '@styles/cart.scss'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Cart = () => {

    const {t} = useTranslation();
    const cartItems = useSelector( (state) => state.cart.cartItems)
    const totalAmount = useSelector( (state) => state.cart.totalAmount)

    return (
        <Helmet title="Cart">
            <CommonSection title="Shopping Cart"/>
            <section className="cart">
                <div className="container">
                    <div className="row cart-row">
                        <div className="col-9">
                            {
                                cartItems.length === 0 ? <h2 className="empty-items">{t("noItem.1")}</h2> :
                                    <table className="table">
                                        <thead className="table__thead">
                                        <tr className="table__row">
                                            <th className="table__th">{t("Image.1")}</th>
                                            <th className="table__th">{t("Title.1")}</th>
                                            <th className="table__th">{t("Price.1")}</th>
                                            <th className="table__th">{t("Qty.1")}</th>
                                            <th className="table__th">{t("Delete.1")}</th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        {
                                            cartItems.map((item, index) => (
                                                <Tr item={item} key={index}/>
                                            ))
                                        }
                                        </tbody>
                                    </table>
                            }
                        </div>
                        <div className="col-3">
                            <div className="cart__total">
                                <h6 className="cart__subtotal">
                                    {t("Subtotal.1")}
                                    <span className="cart__amount">${totalAmount}</span>
                                </h6>
                            </div>
                            <p className="cart__taxes">{t("taxes.1")}</p>
                            <div className="buttons">
                                <button className="button buttons__btn"><Link to="/checkout">{t("Checkout.1")}</Link></button>
                                <button className="button buttons__btn"><Link to="/shop">{t("Continue.1")}</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Helmet>
    );
};

const Tr = ({item}) => {

    const {t} = useTranslation();

    const dispatch = useDispatch()

    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id))
    }

    return <tr>
        <td className="table__td"><img className="table__tdImg" src={item.imgUrl} alt=""/></td>
        <td className="table__td">{t(`${item.productName}.1`)}</td>
        <td className="table__td">${item.price}</td>
        <td className="table__td">{item.quantity}</td>
        <td className="table__td">
            <motion.i whileTap={{scale:1.2}} onClick={deleteProduct} className="ri-delete-bin-line"></motion.i>
        </td>
    </tr>
}

export default Cart;