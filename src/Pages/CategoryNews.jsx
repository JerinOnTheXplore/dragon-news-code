import React, { use } from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const {id}=useParams();
    console.log(id);
    return (
        <div>
            <h2>category news-{id}</h2>
        </div>
    );
};

export default CategoryNews;