import React from 'react';

import {Link} from "react-router-dom";
import  './footer.scss'


const Footer = () => {

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
                            <h4 className="quick__links-title">Top Categories</h4>
                            <ul className="list">
                                <li className="list__item">
                                    <Link className="list__link" to="#">Mobile Phones</Link>
                                </li>
                                <li className="list__item">
                                    <Link className="list__link" to="#">Modern Sofa</Link>
                                </li>
                                <li className="list__item">
                                    <Link className="list__link" to="#">Arm Chair</Link>
                                </li>
                                <li className="list__item">
                                    <Link className="list__link" to="#">Smart Watches</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2 column-md">
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Useful Links</h4>
                            <ul className="list">
                                <li className="list__item">
                                    <Link className="list__link" to="/shop">Shop</Link>
                                </li>
                                <li className="list__item">
                                    <Link className="list__link" to="/cart">Cart</Link>
                                </li>
                                <li className="list__item">
                                    <Link className="list__link" to="/login">Login</Link>
                                </li>
                                <li className="list__item">
                                    <Link className="list__link" to="#">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-3 column-md">
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Contact</h4>
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
                        <p className="footer__copyright">Copyright {year} developed by Bektursun Baimamat. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;