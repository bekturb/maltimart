import React from 'react';

import '../../../styles/common-section.scss'

const CommonSection = ({title}) => {
    return (
        <section className="common">
            <div className="container">
                <h1 className="common__title">{title}</h1>
            </div>
        </section>
    );
};

export default CommonSection;