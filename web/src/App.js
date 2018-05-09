import React, { Component } from 'react';

import { Layout } from 'antd';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login';
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return ( 
       
    
       <Router>
         <Layout className='app'>
             <Sider className='sider'
                  collapsible
                  
             ></Sider>             
               
             <Layout>
                  <Header className='head'>物流跟踪</Header>
                  <Content className='content'>
                    <Route exact path='/' component={Login}  />  
                    <Route path='/home' component={Home}  />  
                  </Content>             
                  <Footer className='foot'>@2018copyright</Footer>         
         
            </Layout>
        </Layout>   
        </Router>
          
 
    
         

              
 
      
    );
  }
}

const Home = ()=>(
   <a>测试</a>
);
export default App;
