import React from 'react';
import Helmet from "../../layout/Helmet";
import CommonSection from "../../components/UI/CommonSection";
import {useSelector} from "react-redux";

import "../../styles/checkout.scss"
import {useTranslation} from "react-i18next";

const Checkout = () => {

    const {t} = useTranslation();
    const totalQuality = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)

    return (
        <Helmet title="Checkout">
            <CommonSection title="Checkout"/>
            <section className="billing">
                <div className="container">
                    <div className="row billing__row">
                        <div className="col-8">
                            <h6 className="billing__information">{t("Billing.1")}</h6>
                            <form className="form billing__form" action="">
                                <p className="form__group">
                                    <input className="form__input billing__input" type="text"
                                           placeholder={t("name.1")}/>
                                </p>
                                <p className="form__group">
                                    <input className="form__input billing__input" type="email"
                                           placeholder={t("email.1")}/>
                                </p>
                                <p className="form__group">
                                    <input className="form__input billing__input" type="number"
                                           placeholder={t("number.1")}/>
                                </p>
                                <p className="form__group">
                                    <input className="form__input billing__input" type="text"
                                           placeholder={t("address.1")}/>
                                </p>
                                <p className="form__group">
                                    <input className="form__input billing__input" type="text" placeholder={t("city.1")}/>
                                </p>
                                <p className="form__group">
                                    <input className="form__input billing__input" type="text"
                                           placeholder={t("postal.1")}/>
                                </p>
                                <p className="form__group">
                                    <input className="form__input billing__input" type="text" placeholder={t("country.1")}/>
                                </p>
                            </form>
                        </div>
                        <div className="col-4">
                            <div className="billing__cart">
                                <h6 className="billing__item billing__item--margin">{t("TotalQty.1")}:<span
                                    className="billing__element">{totalQuality} {t("items.1")}</span></h6>
                                <h6 className="billing__item billing__item--margin">{t("Subtotal.1")}:<span
                                    className="billing__element">${totalAmount}</span>
                                </h6>
                                <h6 className="billing__item billing__item--margin">
                                    <span>
                                    {t("Shipping.1")}:
                                    <br/>
                                        {t("Free Shipping.1")}
                                </span>
                                    <span className="billing__element">$0</span>
                                </h6>
                                <h4 className="billing__item billing__item--border">{t("Total Cost.1")}:<span className="billing__element">${totalAmount}</span>
                                </h4>
                                <button className="button billing__btn">{t("Place an Order.1")}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Helmet>
    );
};

export default Checkout;