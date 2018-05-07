import React, { Component } from 'react';

import { Layout } from 'antd';
import 'antd/dist/antd.css'; 
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div style={{color:0xff0000}}>
        <Layout>
           <Header>Header</Header>
       
            
               
              <Content>Conten   

                t</Content>
              <Footer>Footer</Footer>
            </Layout>
         
         

      </div>            
 
      
    );
  }
}

export default App;
