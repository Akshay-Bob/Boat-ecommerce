import React from "react";
import Cat from '../../assests/categories/cat-1.jpg';
import "./Categories.scss";

const Categories = () =>{
    return <div className="shop-by-category">
        <div className="categories">
            <div className='category'>
                <img src={Cat}/>
            </div>
            <div className='category'>
                <img src={Cat}/>
            </div>
            <div className='category'>
                <img src={Cat}/>
            </div>
            <div className='category'>
                <img src={Cat}/>
            </div>
        </div>
    </div>
};
export default Categories;