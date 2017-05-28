'use strict'

// import the libs we need
import React            from 'react';
import ReactDOM         from 'react-dom'

// create a React Component called _App_
export default class App extends React.Component {

  render(){
    return(
    <container>
      <h1>Hello World</h1>
    </container>
    )
  }

}

ReactDOM.render(<App/>, document.querySelector('#container'))
