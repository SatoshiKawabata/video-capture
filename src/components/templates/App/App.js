import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import ActionCreator from './../../../app/ActionCreator';
import Header from '../../organisms/Header/Header';
import Body from '../../organisms/Body/Body';
import DrawerMenu from '../../organisms/DrawerMenu/DrawerMenu';

const App = props => {
  return (
    <div className="App">
      <Header />
      <Body />
      <DrawerMenu />
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      {props.fuga}
      <button onClick={props.handleClick}>button</button>*/}
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => {
      dispatch(ActionCreator.fuga());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);