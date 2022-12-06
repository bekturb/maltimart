import React from 'react';

import Helmet from "../../layout/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import {motion} from "framer-motion";
import { cartActions} from "../../redux/slices/cartSlice";
import {useSelector, useDispatch} from "react-redux";

import '@styles/cart.scss'
import {Link} from "react-router-dom";

const Cart = () => {

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
                                cartItems.length === 0 ? <h2 className="empty-items">No item added to the cart</h2> :
                                    <table className="table">
                                        <thead className="table__thead">
                                        <tr className="table__row">
                                            <th className="table__th">Image</th>
                                            <th className="table__th">Title</th>
                                            <th className="table__th">Price</th>
                                            <th className="table__th">Qty</th>
                                            <th className="table__th">Delete</th>
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
                                    Subtotal
                                    <span className="cart__amount">${totalAmount}</span>
                                </h6>
                            </div>
                            <p className="cart__taxes">taxes and shipping will calculate in checkout</p>
                            <div className="buttons">
                                <button className="button buttons__btn"><Link to="/checkout">Checkout</Link></button>
                                <button className="button buttons__btn"><Link to="/shop">Continue Shopping</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Helmet>
    );
};

const Tr = ({item}) => {

    const dispatch = useDispatch()

    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id))
    }

    return <tr>
        <td className="table__td"><img className="table__tdImg" src={item.imgUrl} alt=""/></td>
        <td className="table__td">{item.productName}</td>
        <td className="table__td">${item.price}</td>
        <td className="table__td">{item.quantity}</td>
        <td className="table__td">
            <motion.i whileTap={{scale:1.2}} onClick={deleteProduct} className="ri-delete-bin-line"></motion.i>
        </td>
    </tr>
}

export default Cart;