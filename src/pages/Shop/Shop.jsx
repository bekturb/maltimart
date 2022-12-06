import React, {useState} from 'react';

import CommonSection from "@components/UI/CommonSection";
import Helmet from "../../layout/Helmet";


import products from '@static/data/products'

import '@styles/shop.scss'
import ProductList from "../../components/UI/ProductList";
const Shop = () => {

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
                                    <option className="sort__category">Filter By Category</option>
                                    <option className="sort__category" value="sofa">Sofa</option>
                                    <option className="sort__category" value="mobile">Mobile</option>
                                    <option className="sort__category" value="chair">Chair</option>
                                    <option className="sort__category" value="watch">Watch</option>
                                    <option className="sort__category" value="wireless">Wireless</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-3 filter-column">
                            <div className="filter__widget">
                                <select className="sort">
                                    <option className="sort__category">Sort By</option>
                                    <option className="sort__category" value="ascending">Ascending</option>
                                    <option className="sort__category" value="descending">Descending</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-6 search--column">
                            <div className="search-box">
                                <input onChange={handleSearch} className="search-box__input" type="text" placeholder="Search......" />
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
                            productsData.length === 0? <h1 className="empty">No Products are found!</h1>
                                : <ProductList data={productsData}/>

                        }
                    </div>
                </div>
            </section>
        </Helmet>
    )
};

export default Shop;