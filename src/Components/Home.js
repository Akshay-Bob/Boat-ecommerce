import React from "react";
import { Container } from "react-bootstrap";
import Fotter from "./Footer/Fotter";
import Newsletter from "./Footer/Newsletter/Newsletter";
import Banner from "./Home Banner/Banner";
import Shopcomponenet from "./Shopcomponent/ShopComponent";

function Home() {
    return (<>
      <Banner/>
      <Newsletter/>
      <Fotter/>
    </>
)}

export default Home;