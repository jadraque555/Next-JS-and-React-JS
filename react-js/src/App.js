// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import BindEvent from './components/BindEvent'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Inline from './components/Inline'
// import Hubspot from './components/Hubspot'
import Stylesheet from './components/Stylesheet';
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table';
import ParenComp from './components/ParentComp';

class App extends Component {
  render() {

    return (
      <div className="App">
        <ParenComp />
        {/* <PureCompnent /> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
        {/* <Stylesheet /> */}
        {/* <Inline /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <BindEvent /> */}
        {/* <FunctionClick />
        <ClassClick /> */}
          {/* <Greet name="jayson" heroname="saitama" /> */}
        {/* <Counter /> */}
        {/* <Welcome /> */}
        {/* <Greet name="jayson">
          <p>Children Element here</p>
        </Greet>
        <Greet name="brad sonjay" />
        <Greet name="jesssamay" />
        <Welcome name="jayson" />
        <Welcome name="christian" />
        <Welcome name="melissa" />
        <Hello /> */}
      </div>
    );
  }
}

export default App
