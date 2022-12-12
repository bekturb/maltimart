import React, {useState} from 'react';

import CommonSection from "@components/UI/CommonSection";
import Helmet from "../../layout/Helmet";


import products from '@static/data/products'

import '@styles/shop.scss'
import ProductList from "../../components/UI/ProductList";
import {useTranslation} from "react-i18next";
const Shop = () => {

    const {t} = useTranslation();
    const [productsData, setProductData] = useState(products)
    const handleFilter = (e) => {
        const filterValue = e.target.value;
        if (filterValue === "sofa"){
            const filteredProducts = products.filter(
                (item) => item.category === "sofa"
            );
            setProductData(filteredProducts)
        }
        if (filterValue === "mobile"){
            const filteredProducts = products.filter(
                (item) => item.category === "mobile"
            );
            setProductData(filteredProducts)
        }
        if (filterValue === "chair"){
            const filteredProducts = products.filter(
                (item) => item.category === "chair"
            );
            setProductData(filteredProducts)
        }
        if (filterValue === "watch"){
            const filteredProducts = products.filter(
                (item) => item.category === "watch"
            );
            setProductData(filteredProducts)
        }
        if (filterValue === "wireless"){
            const filteredProducts = products.filter(
                (item) => item.category === "wireless"
            );
            setProductData(filteredProducts)
        }
    }

    const handleSearch = (e) => {
        const searchItem = e.target.value
        const searchedProducts = products.filter(
            (item) => item.category.toLowerCase().includes(searchItem.toLowerCase())
        );
        setProductData(searchedProducts)
    }

    return (
        <Helmet title="Shop">
            <CommonSection title='Products'/>

            <section className="filter">
                <div className="container">
                    <div className="row filter--row">
                        <div className="col-3 filter--column">
                            <div className="filter__widget">
                                <select className="sort" onChange={handleFilter}>
                                    <option className="sort__category">{t("Filter By Category.1")}</option>
                                    <option className="sort__category" value="sofa">{t("sofa.1")}</option>
                                    <option className="sort__category" value="mobile">{t("mobile.1")}</option>
                                    <option className="sort__category" value="chair">{t("chair.1")}</option>
                                    <option className="sort__category" value="watch">{t("watch.1")}</option>
                                    <option className="sort__category" value="wireless">{t("wireless.1")}</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-3 filter-column">
                            <div className="filter__widget">
                                <select className="sort">
                                    <option className="sort__category">{t("Sort by.1")}</option>
                                    <option className="sort__category" value="ascending">{t("Ascending.1")}</option>
                                    <option className="sort__category" value="descending">{t("Descending.1")}</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-6 search--column">
                            <div className="search-box">
                                <input onChange={handleSearch} className="search-box__input" type="text" placeholder={t("Search.1")} />
                                <span className="search-box__icon">
                                    <i className="ri-search-line"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="products-sort">
                <div className="container">
                    <div className="row products-sort__row">
                        {
                            productsData.length === 0? <h1 className="empty">{t("NoProducts.1")}</h1>
                                : <ProductList data={productsData}/>

                        }
                    </div>
                </div>
            </section>
        </Helmet>
    )
};

export default Shop;