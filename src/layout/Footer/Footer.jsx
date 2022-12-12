import React from 'react';

import {Link} from "react-router-dom";
import  './footer.scss'
import {useTranslation} from "react-i18next";


const Footer = () => {

    const {t} = useTranslation();

    const year = new Date().getFullYear()
    return (
        <footer className="footer">
            <div className="container">
                <div className="row row-align">
                    <div className="col-4 column-md">
                        <div className="logo">
                            <div className="logo__items">
                                <h1 className="logo__title logo__title-color">Multimart</h1>
                            </div>
                        </div>
                        <p className='footer__text'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Autem
                            dolorem exercitationem non obcaecati pariatur
                            placeat
                            ratione repellendus, vitae voluptatibus voluptatum.
                        </p>
                    </div>
                    <div className="col-3 footer__column column-md">
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">{t("Top.1")}</h4>
                            <ul className="list">
                                <li className="list__item">
                                    <Link className="list__link" to="#">{t("MobilePhones.1")}</Link>
                                </li>
                                <li className="list__item">
                                    <Link className="list__link" to="#">{t("Modern Sofa.1")}</Link>
                                </li>
                                <li className="list__item">
                                    <Link className="list__link" to="#">{t("Arm.1")}</Link>
                                </li>
                                <li className="list__item">
                                    <Link className="list__link" to="#">{t("Smart.1")}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2 column-md">
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">{t("Useful.1")}</h4>
                            <ul className="list">
                                <li className="list__item">
                                    <Link className="list__link" to="/shop">{t("Shop.1")}</Link>
                                </li>
                                <li className="list__item">
                                    <Link className="list__link" to="/cart">{t("Cart.1")}</Link>
                                </li>
                                <li className="list__item">
                                    <Link className="list__link" to="/login">{t("Login.1")}</Link>
                                </li>
                                <li className="list__item">
                                    <Link className="list__link" to="#">{t("Privacy.1")}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-3 column-md">
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">{t("Contact.1")}</h4>
                            <ul className="list">
                                <li className="list__item list__item--flex">
                                    <span className="list__icon"><i className="ri-map-pin-line"></i></span>
                                    <p className="list__info">123 Bishkek, Kyrgyzstan</p>
                                </li>
                                <li className="list__item list__item--flex">
                                    <span className="list__icon"><i className="ri-phone-line"></i></span>
                                    <p className="list__info">+996 777 333 333</p>
                                </li>
                                <li className="list__item list__item--flex">
                                    <span className="list__icon"><i className="ri-mail-line"></i></span>
                                    <p className="list__info">example123@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <p className="footer__copyright">{t('Copyright.1')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;