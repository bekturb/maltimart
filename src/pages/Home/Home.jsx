import React, {useEffect, useState} from 'react';

import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Helmet from "@layout/Helmet";
import Clock from "../../components/UI/Clock";
import products from '@static/data/products'
import heroImg from "@static/images/hero-img.png"
import counterImg from "@static/images/counter-timer-img.png"
import {motion} from "framer-motion";

import '@styles/home.scss'
import Services from "@services";
import ProductList from "@components/UI/ProductList";

const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([])
    const [bestProducts, setBestProducts] = useState([])
    const [mobilePhone, setMobilePhone] = useState([])
    const [wireless, setWireless] = useState([])
    const [popularProducts, setPopularProducts] = useState([])
    const {t} = useTranslation();

    const year = new Date().getFullYear()

    useEffect(() => {
        const filteredTrendingProducts = products.filter(item => item.category === "chair")

        const filteredBestProducts = products.filter(item => item.category === "sofa")

        const filteredMobileProducts = products.filter(item => item.category === "mobile")

        const filteredWirelessProducts = products.filter(item => item.category === "wireless")

        const filteredPopularProducts = products.filter(item => item.category === "watch")

        setTrendingProducts(filteredTrendingProducts)
        setBestProducts(filteredBestProducts)
        setMobilePhone(filteredMobileProducts)
        setWireless(filteredWirelessProducts)
        setPopularProducts(filteredPopularProducts)
    }, [])

    return (
        <Helmet title={"Home"}>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6 hero__column">
                            <div className="hero__content">
                                <p className="hero__subtitle hero__subtitle--weight">
                                    {t(`Trending.1`)} {year}
                                </p>
                                <h2 className="hero__title">{t("Make.1")}</h2>
                                <p className="hero__subtitle"> Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit. Aliquam aspernatur autem delectus dignissimos
                                    provident quod repellat sapiente sunt suscipit vitae.</p>
                                <motion.button whileTap={{scale: 1.2}} className='button hero__btn'>
                                    <Link to="/shop">{t("Button.1")}</Link>
                                </motion.button>
                            </div>
                        </div>
                        <div className="col-6 hero__column">
                            <div className="hero__img">
                                <img className="hero__image" src={heroImg} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Services />
            <section className="trending">
                <div className="container">
                    <div className="row row--justify">
                        <div className="col-12">
                            <h2 className="section-title section-title--align">{t("Trending.1")}</h2>
                        </div>
                        <ProductList data={trendingProducts}/>
                    </div>
                </div>
            </section>
            <section className="best">
                <div className="container">
                    <div className="row row--justify">
                        <div className="col-12">
                            <h2 className="section-title section-title--align">{t("Best Sales.1")}</h2>
                        </div>
                        <ProductList data={bestProducts}/>
                    </div>
                </div>
            </section>
            <section className="timer-panel">
                <div className="container">
                    <div className="row timer-panel--row">
                        <div className="col-6 col-6__width">
                            <div className="clock">
                                <div className="clock__top-content">
                                    <h4 className="clock__title">{t("Quality.1")}</h4>
                                    <h3 className="clock__subtitle">{t("Limited.1")}</h3>
                                </div>
                                <Clock/>
                                <button className="button clock__btn">{t("Visit.1")}</button>
                            </div>
                        </div>
                        <div className="col-6 timer-panel__column">
                            <img className="timer-panel__img" src={counterImg} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="new-arrivals">
                <div className="container">
                    <div className="row row--justify">
                        <div className="col-12">
                            <h2 className="section-title new-arrivals__title">{t("New Arrivals.1")}</h2>
                        </div>
                        <ProductList data={mobilePhone}/>
                        <ProductList data={wireless}/>
                    </div>
                </div>
            </section>
            <section className="popular">
                <div className="container">
                    <div className="row row--justify">
                        <div className="col-12">
                            <h2 className="section-title popular__title">{t("Popular.1")}</h2>
                        </div>
                        <ProductList data={popularProducts}/>
                    </div>
                </div>
            </section>
        </Helmet>
    )
};

export default Home;