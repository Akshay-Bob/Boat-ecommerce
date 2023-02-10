import React from "react";
import { Container } from "react-bootstrap";
import Newsletter from "./Footer/Newsletter/Newsletter";
import Banner from "./Home Banner/Banner";
import Shopcomponenet from "./Shopcomponent/ShopComponent";

function Home() {
    return (<>
      <Banner/>
      {/* <Shopcomponenet/> */}
      <Newsletter/>
    </>
)}

export default Home;