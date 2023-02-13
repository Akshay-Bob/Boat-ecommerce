import React from "react";
import { Container } from "react-bootstrap";
import Categories from "./Category/Categories";
import Fotter from "./Footer/Fotter";
import Newsletter from "./Footer/Newsletter/Newsletter";
import Banner from "./Home Banner/Banner";
import Shopcomponenet from "./Shopcomponent/ShopComponent";
import './Home.scss';

function Home() { 
    return (<>
      <Banner/>
      <div className='main-content'>
        <div className="layout">
          <Categories/>
        </div>
      </div>
      <Newsletter/>
      <Fotter/>
    </>
)}

export default Home;