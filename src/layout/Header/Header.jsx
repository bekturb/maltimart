import React, {useRef, useEffect} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {nav__links} from '@routesData/routes.config'
import { useTranslation } from 'react-i18next';
import Logo from '../../static/images/eco-logo.png'
import userIcon from '../../static/images/user-icon.png'
import translatedIcon from '../../static/images/translate.svg'
import {useSelector} from "react-redux";
import {motion} from "framer-motion";
import './header.scss'

const Header = () => {
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const navigate = useNavigate()
    const headerRef = useRef(null)
    const menuRef = useRef(null)
    const languagesRef = useRef(null)
    const {t} = useTranslation();

    const stickyHeaderFunc = ()=>{
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop
                > 80){
                headerRef.current.classList.add("sticky__header")
            }else{
                headerRef.current.classList.remove("sticky__header")
            }
        })
    }

    const menuToggle = () => menuRef.current.classList.toggle("active__menu")
    const languageToggle = () => languagesRef.current.classList.toggle("language__translator")
    const changeLang = (lang) => {
        localStorage.setItem("lang", lang);
        window.location.reload();
    }

    useEffect(() =>{
        stickyHeaderFunc();
        return () => window.removeEventListener("scroll", stickyHeaderFunc)
    },[])

    const navigateToCart = () => {
        navigate("/cart")
    }

    return (
        <header className="header" ref={headerRef}>
            <div className="container">
                <div className="header__wrapper">
                    <div className="logo">
                        <img className="logo__img" src={Logo} alt=""/>
                        <div className="logo__items">
                            <h1 className="logo__title">Multimart</h1>
                            <p className="logo__year">Since 1995</p>
                        </div>
                    </div>
                    <div className="navigation" ref={menuRef} onClick={menuToggle}>
                        <ul className="menu">
                            {nav__links.map((item, index) => (
                                <li className="navigation__items" key={index}>
                                <NavLink className={(navClass) => navClass.isActive ? "nav--active" : ''}
                                         to={item.path}>
                                    {t(`${item.display}.1`)}
                                </NavLink>
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div className="nav-icons">
                        <span className="cart-icon nav-icons__icon">
                            <i className="ri-heart-line"></i>
                            <span className='badge'>1</span>
                        </span>
                        <span className="bag-icon nav-icons__icon" onClick={navigateToCart}>
                            <i className="ri-shopping-bag-line"></i>
                            <span className='badge'>{totalQuantity}</span>
                        </span>
                        <span className="user-icon  nav-icons__icon">
                            <motion.img whileTap={{scale: 1.1}} className="img img--width" src={userIcon} alt=""/>
                        </span>
                        <span>
                            <motion.img onClick={languageToggle} whileTap={{scale:1.1}} className="translate" src={translatedIcon} alt=""/>
                        </span>
                        <span ref={languagesRef} className="translator">
                            <motion.button onClick={()=> changeLang("ru")} whileTap={{scale: 1.1}} className="translator__btn">Русский</motion.button>
                            <motion.button onClick={()=> changeLang("en")} className="translator__btn">English</motion.button>
                        </span>
                        <div className="mobile">
                        <span onClick={menuToggle} className="mobile__burger">
                            <i className="ri-menu-line"></i>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;