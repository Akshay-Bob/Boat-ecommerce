import React from 'react';
import './Shopcomponenet.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabComponet from './TabComponet';

const Shopcomponenet = function Shopcomponenet(){
    return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <TabComponet />
        <TabComponet />
        <TabComponet />
        <TabComponet />
        <TabComponet />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <h1>Hello</h1>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <h1>Hello</h1>
      </Tab>
    </Tabs>




    );
}

export default Shopcomponenet;