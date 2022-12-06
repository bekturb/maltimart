import React, {useState, useRef, useEffect} from 'react';

import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {cartActions} from "../../redux/slices/cartSlice";
import products from '../../static/data/products'
import Helmet from '@layout/Helmet'
import CommonSection from "@components/UI/CommonSection";
import ProductList from "@components/UI/ProductList";

import {motion} from "framer-motion";
import '../../styles/product-detail.scss'
import {toast} from "react-toastify";
const ProductDetail = () => {

    const [tab, setTab] = useState("desc");
    const [rating, setRating] = useState(null);
    const reviewUser = useRef('');
    const reviewMsg = useRef('');
    const dispatch = useDispatch()

    const {id} = useParams()
    const product = products.find(item => item.id === id);

    const {imgUrl, productName, price, avgRating, reviews, description, shortDesc, category} = product;

    const relatedProducts = products.filter(item => item.category === category)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const reviewUserName = reviewUser.current.value
        const reviewUserMsg = reviewMsg.current.value

        const reviewObj = {
            userName: reviewUserName,
            text: reviewUserMsg,
            rating,
        }
        toast.success("Review submitted")
    }

    const addToCart = () => {
        dispatch(
            cartActions.addItem({
                id,
                image: imgUrl,
                productName,
                price,
            })
        );
        toast.success("Product added successfully")
    }

    useEffect(() => {
        window.scroll(0,0)
    },[product])

    return (
        <Helmet title={productName}>
            <CommonSection title={productName}/>

            <section className="product-info">
                <div className="container">
                    <div className="row product-info__row">
                        <div className="col-6 product-info__column">
                            <div className="product-info__image">
                                <img className="product-info__img" src={imgUrl} alt=""/>
                            </div>
                        </div>
                        <div className="col-6 product-info__column">
                            <div className="product-info__detail">
                                <h1 className="product-info__name">{productName}</h1>
                                <div className="product-info__rating">
                                    <div className="product-info__stars">
                                        <span className="product-info__star">
                                            <i className="ri-star-s-fill"></i>
                                        </span>
                                        <span className="product-info__star">
                                            <i className="ri-star-s-fill"></i>
                                        </span>
                                        <span className="product-info__star">
                                            <i className="ri-star-s-fill"></i>
                                        </span>
                                        <span className="product-info__star"><i className="ri-star-s-fill"></i>
                                        </span>
                                        <span className="product-info__star">
                                            <i className="ri-star-half-line"></i>
                                        </span>
                                    </div>
                                    <p className="product-info__rating-title"><span
                                        className="product-info__rating-number">{avgRating}</span> (ratings)</p>
                                </div>
                                <div className="product-info__quality">
                                    <span className="product-info__price">${price}</span>
                                    <span className="product-info__category">Category: {category.toLowerCase()}</span>
                                </div>
                                <p className='product-info__desc'>{shortDesc}</p>
                                <motion.button whileTap={{scale: 1.1}} className="button product-info__button" onClick={addToCart}>
                                    Add to Cart
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tabs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tabs__wrapper">
                                <h6 className={tab === "desc" ? "active-tab" : "tabs__tab"}
                                    onClick={() => setTab("desc")}>Description</h6>
                                <h6 className={tab === "rev" ? "active-tab" : "tabs__tab"}
                                    onClick={() => setTab("rev")}>Review({reviews.length})</h6>
                            </div>
                            {
                                tab === "desc" ? (
                                    <div className="tabs__content">
                                        <p className="tabs__desc">{description}</p>
                                    </div>
                                ) : (
                                    <div className="product-review">
                                        <div className="review__wrapper">
                                            <ul className="review__list">
                                                {
                                                    reviews?.map((item, index) => (
                                                        <li className="review__item" key={index}>
                                                            <h6 className="review__user">Baimamat Bektursun</h6>
                                                            <span className="review__statistic">{item.rating} ( rating)</span>
                                                            <p className="review__text">{item.text}</p>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            <div className="review-form">
                                                <h4 className="review-form__title">Leave your experience</h4>
                                                <form className="form" action="" onSubmit={handleSubmit}>
                                                    <div className="form__group">
                                                        <input className="form__input"
                                                               required
                                                               type="text"
                                                               placeholder="Enter name"
                                                               ref={reviewUser} />
                                                    </div>
                                                    <div className="form__group form__group--display">
                                                        <motion.span whileTap={{scale: 1.2}} className="form__stars" onClick={() => setRating(1)}>
                                                            1<i className="ri-star-s-fill"></i>
                                                        </motion.span>
                                                        <motion.span whileTap={{scale: 1.2}} className="form__stars" onClick={() => setRating(2)}>
                                                            2<i className="ri-star-s-fill"></i>
                                                        </motion.span>
                                                        <motion.span whileTap={{scale: 1.2}} className="form__stars" onClick={() => setRating(3)}>
                                                            3<i className="ri-star-s-fill"></i>
                                                        </motion.span>
                                                        <motion.span whileTap={{scale: 1.2}} className="form__stars" onClick={() => setRating(4)}>
                                                            4<i className="ri-star-s-fill"></i>
                                                        </motion.span>
                                                        <motion.span whileTap={{scale: 1.2}} className="form__stars" onClick={() => setRating(5)}>
                                                            5<i className="ri-star-s-fill"></i>
                                                        </motion.span>
                                                    </div>
                                                    <div className="form__group">
                                                        <textarea
                                                            ref={reviewMsg}
                                                            rows={4}
                                                            className="form__textarea"
                                                            type="text"
                                                            placeholder="Review Message ..."
                                                            required
                                                        />
                                                    </div>
                                                    <motion.button whileTap={{scale: 1.2}} type="submit" className="button form__btn">Submit</motion.button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className="col-12">
                            <h2 className="related__title">You might also like</h2>
                        </div>
                        <ProductList data={relatedProducts} />
                    </div>
                </div>
            </section>
        </Helmet>
    );
};

export default ProductDetail;