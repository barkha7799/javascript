import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      title: 'React simple todo application'
    }
  }
}

render();
{
  return (
    
    <div className="App">
    <h1>hello form</h1>
    <form>
    <input type="text" ref="name" />
    <input type="text" ref="completed"/>
    <button onClick={this.addTodo}>Add todo</button>
    </form>
    </div>
  );
}


/* 11111!!!!!

class App extends Component {
constructor(props){
  super(props);
  this.state={
    title:"React Simple CRUD Application",
    act:0,
    index:'',
    datas: []
  }
}
componentDidMount(){
  this.refs.name.focus();
}
fSubmit = (e) =>{
  e.preventfault();
  console.log('try');

  let datas = this.state.datas;
  let name = this.refs.name.nodeValue;
  let address = this.refs.address.nodeValue;

  let data = {
    name,address
  }

  datas.push(data);

  this.setState({datas: datas});

  this.refs.myForm.requestFullscreen();
  this.refs.name.focus();
}

render(){
  let
  return(
    <div classname="App">
    <h2>{this.state.title}</h2>
    <form ref="myForm"classname="myForm">
    <input type="text" ref="name" placeholder="your name" className="fromField"/>
    <input type="text" ref="address" placeholder="your address" className="formField"/>
    <button onClick=[(e) =>this.fsubmit(e)] className="mybutton",submit</button>
    </form>
    <pre>
    {datas.map((data,i)=>
      <li key={i} classname="mylist">
      {i+1}. {data.name}, {data.address}
      <button onClick={()=>this.fRemove(i)} className="myButton">remove</button>
      <button onClick={()=>this.UNSAFE_componentWillUpdate(i)} classname="myButton">edit</button>
        </li>
        )}
          </pre>
    </div>
  );
}
}


export default App;
*/




/* 22222@@@@@

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App; */
