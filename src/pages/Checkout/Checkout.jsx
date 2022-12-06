import React from 'react';
import Helmet from "../../layout/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import {useSelector} from "react-redux";

import "../../styles/checkout.scss"

const Checkout = () => {

    const totalQuality = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)

    return (
        <Helmet title="Checkout">
            <CommonSection title="Checkout"/>
            <section className="billing">
                <div className="container">
                    <div className="row billing__row">
                        <div className="col-8">
                            <h6 className="billing__information">Billing Information</h6>
                            <form className="form billing__form" action="">
                                <p className="form__group">
                                    <input className="form__input billing__input" type="text"
                                           placeholder="Enter your name"/>
                                </p>
                                <p className="form__group">
                                    <input className="form__input billing__input" type="email"
                                           placeholder="Enter your email"/>
                                </p>
                                <p className="form__group">
                                    <input className="form__input billing__input" type="number"
                                           placeholder="Phone number"/>
                                </p>
                                <p className="form__group">
                                    <input className="form__input billing__input" type="text"
                                           placeholder="Street address"/>
                                </p>
                                <p className="form__group">
                                    <input className="form__input billing__input" type="text" placeholder="City"/>
                                </p>
                                <p className="form__group">
                                    <input className="form__input billing__input" type="text"
                                           placeholder="Postal code"/>
                                </p>
                                <p className="form__group">
                                    <input className="form__input billing__input" type="text" placeholder="Country"/>
                                </p>
                            </form>
                        </div>
                        <div className="col-4">
                            <div className="billing__cart">
                                <h6 className="billing__item billing__item--margin">Total Qty:<span
                                    className="billing__element">{totalQuality} items</span></h6>
                                <h6 className="billing__item billing__item--margin">Subtotal:<span
                                    className="billing__element">${totalAmount}</span>
                                </h6>
                                <h6 className="billing__item billing__item--margin">
                                    <span>
                                    Shipping:
                                    <br/>
                                        Free shipping
                                </span>
                                    <span className="billing__element">$0</span>
                                </h6>
                                <h4 className="billing__item billing__item--border">Total Cost:<span className="billing__element">${totalAmount}</span>
                                </h4>
                                <button className="button billing__btn">Place an order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Helmet>
    );
};

export default Checkout;