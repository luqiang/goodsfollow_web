import React, { Component } from 'react';

import { Layout } from 'antd';
import './App.css';
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return ( 
        <Layout className='app'>
             <Sider className='sider'
                  collapsible
                  
             ></Sider>             
               
             <Layout>
                  <Header className='head'>物流跟踪</Header>
                  <Content className='content'>Content</Content>             
                  <Footer className='foot'>@2018copyright</Footer>         
            
        
            </Layout>
        </Layout>    
         

              
 
      
    );
  }
}

export default App;
