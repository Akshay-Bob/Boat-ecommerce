import React from "react";
import { Container } from "react-bootstrap";
import Banner from "./Home Banner/Banner";
import Shopcomponenet from "./Shopcomponent/ShopComponent";

function Home() {
    return (<Container>
      <Banner/>
      <Shopcomponenet/>

    </Container>
)}

export default Home;