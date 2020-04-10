import React, { Component } from 'react';
import './App.css';   // style
import First from './First';
import Counter from './counter/Counter.js';
import Example from './Example';


// stateless component
// ========
// const XYZ = (props) => {
//   return <h1> I am a Stateless component</h1>
// }

class App extends Component {

  // state
  // ========
  // state = {
  //   persons: [
  //     { name: 'Zakia', email: 'abc@xyz.com', address: 'ABC' },
  //     { name: 'Afrin', email: 'def@xyz.com', address: 'DEF' },
  //     { name: 'Jeme', email: 'ghi@xyz.com', address: 'GHI' }
  //   ]
  // }


  // Event handler
  // ========
  // state = {
  //   name: ''
  // }
  // clickHandler = (event) => {
  //   alert('Hi, I have clicked');
  //   console.log(event);
  // }
  // inputHandler = (event) => {
  //   this.setState({
  //     name: event.target.value
  //   })
  // }

  render() {

    // Inline style
    // ========
    // let obj = {
    //   padding: '30px',
    //   textAlign: 'right',
    //   fontFamily: 'Arial',
    //   fontSize: '100px'
    // }

    return (
      // component
      // ========
      // <div className='App'>
      //   <First />
      // </div>

      // props
      // ========
      // <div className='App'>
      //   <First name='Zakia' email='abc@xyz.com' address='ABC' />
      //   <First name='Afrin' email='def@xyz.com' address='DEF' />
      //   <First name='Jeme' email='ghi@xyz.com' address='GHI' />
      // </div>

      // state(simple)
      // ========
      <div className='App'>
        <Counter />
      </div>

      // state
      // ========
      // <div className='App'>
      //   {this.state.persons.map((people, index) => {
      //     return <First
      //       key={index}
      //       name={people.name}
      //       email={people.email}
      //       address={people.address} />
      //   })}
      // </div>

      // Event handler
      // ========
      // <div className='App'>
      //   <div className='container my-3'>
      //     <input onChange={this.inputHandler} type='text' placeholder='Your Name : ' />
      //     <button className='btn btn-primary' onClick={this.clickHandler}>
      //       Click Me
      //     </button>
      //     {this.state.name ? <p> Hello, Mr. {this.state.name} </p> : ''}
      //   </div>
      // </div>

      // stateless component
      // ========
      // <div className='App'>
      //   <XYZ />
      // </div>

      // <div className='App'>
      //   <Example name='Stateless Component' />
      // </div>

      // style
      // ========
      // <div className='App'>
      //   <h1>
      //     Hello React
      //   </h1>
      // </div>

      // Inline style
      // ========
      // <div className='App'>
      //   {/* <h1 style={{ padding: '30px', textAlign: 'right', fontFamily: 'Arial', fontSize: '100px' }}> */}
      //   <h1 style={obj}>
      //     Hello React
      //   </h1>
      // </div>

    );
  }
}

export default App;
