import React from "react";
import Categories from "./Category/Categories";
import Fotter from "./Footer/Fotter";
import Newsletter from "./Footer/Newsletter/Newsletter";
import Banner from "./Home Banner/Banner";
import Products from "./Products/Products";
import './Home.scss';

function Home() { 
    return (<>
      <Banner/>
      <div className='main-content'>
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