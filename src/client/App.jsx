import React from 'react';
import { hot } from 'react-hot-loader';
import moment from 'moment';

class App extends React.Component {
  constructor(){
    super()
  
    this.state = {
      toDoArray: [],
      inputValue: ""
    }
  }

  inputHandler(event){
    this.setState({inputValue: event.target.value})
  }

  clickHandler(){
    let updatedItem = {item: this.state.inputValue,
                       date: moment().format('MMMM Do YYYY, h:mm:ss a')}
    this.setState({toDoArray:[updatedItem, ...this.state.toDoArray], inputValue: ""});
  }

  render() {
    let toDoElements = this.state.toDoArray.map(item => <li>{item.item}, {item.date}</li>)
    return (
      <div>
        These are the things to do
        <ol>{toDoElements}</ol>
        <input onChange={(event)=>{this.inputHandler(event)}} value={this.state.inputValue}/>
        <button onClick={() =>{this.clickHandler()}}> Submit </button>
      </div>
    );
  }
}

export default hot(module)(App);
