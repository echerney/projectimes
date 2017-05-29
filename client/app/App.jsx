'use strict'

// import the libs we need
import React              from 'react';
import ReactDOM           from 'react-dom'
import { ajaxAdapter }    from '../helpers/ajaxAdapter.js'


// create a React Component called _App_
export default class App extends React.Component {

  constructor(){
    super();
    const self = this;
    this.state = {};

    window["NYTD"]={
      render_section_front: (data)=>self.setState(data)
    }

    ajaxAdapter.getArticles();
  }

  render(){

    return(
    <container>
      <h1>Hello World</h1>
    </container>
    )
  }

}

ReactDOM.render(<App/>, document.querySelector('#container'))
