import React from "react";
import Categories from "./Home Banner/Category/Categories";
import Fotter from "./Footer/Fotter";
import Newsletter from "./Footer/Newsletter/Newsletter";
import Banner from "./Home Banner/Banner";
import Products from "./Products/Products";
import './Home.scss';

function Home() { 
    return (<>
      <div className='main-content'>
      <Banner/>
        <div className="layout">
          <Categories/>
          <Products/>
        </div>
      </div>
      <Newsletter/>
      <Fotter/>
    </>
)}

export default Home;