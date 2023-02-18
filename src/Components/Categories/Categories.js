import React from "react";
import './Categories.scss';
import Products from "../Products/Products";

const Categry =()=>{
    return <div className="category-main-content">
        <div className="layout">
            <div className="category-title">
                Categories Title
            </div>
            <Products innerPage={true}/>
        </div>
    </div>
}
export default Categry;