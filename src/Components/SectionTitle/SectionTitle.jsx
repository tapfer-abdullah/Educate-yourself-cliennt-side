/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className='text-center mb-10 mt-20'>
            <h3 className='text-3xl font-semibold mb-2 title-text'>{title}</h3>
            <p className='text-my-p'>{subTitle}</p>
        </div>
    );
};

export default SectionTitle;