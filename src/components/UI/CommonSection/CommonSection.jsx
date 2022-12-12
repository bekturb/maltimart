import React from 'react';

import '../../../styles/common-section.scss'
import {useTranslation} from "react-i18next";

const CommonSection = ({title}) => {

    const {t} = useTranslation();
    
    return (
        <section className="common">
            <div className="container">
                <h1 className="common__title">{t(`${title}.1`)}</h1>
            </div>
        </section>
    );
};

export default CommonSection;