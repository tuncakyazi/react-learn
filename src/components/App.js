import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Home from './../routes/Home';
import Product from './../routes/Product';

const App = () => (
  <div>
    <Header />
    <Content>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
      </Switch>
    </Content>
    <Footer />
  </div>
);

export default App;
