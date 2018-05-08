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
                  <Header className='head'>Header</Header>
                  <Content className='content'>Content</Content>             
                  <Footer className='foot'>Footer</Footer>         
            
        
            </Layout>
        </Layout>    
         

              
 
      
    );
  }
}

export default App;
