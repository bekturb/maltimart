import React from 'react';
import servicesData from "@static/data/servicesData";

import './service.scss'
import {useTranslation} from "react-i18next";

const Services = () => {

    const {t} = useTranslation();

    return (
        <section className='services'>
            <div className="container">
                <div className="row row--display">
                    {
                        servicesData.map((item, index) => (
                            <div className="col-3 service__column" key={index}>
                                <div style={{background: `${item.bg}`}} className="service__item">
                                    <span className="service__icon">
                                        <i className={item.icon}></i>
                                    </span>
                                    <div className="service__icon">
                                        <h3 className="service__title">{t(`${item.title}.1`)}</h3>
                                        <p className="service__subtitle">{item.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;