import React, { Component } from 'react';


class App extends Component {
  state={
    input:'',
    display:''
  }

textBox=(e)=>{
    this.setState({input:e.target.value})
}

buttonSubmitted = (e) => {
  // console.log("clicked")
  this.setState({display:this.state.input})
}

  render() {
    console.log(this.state)
    
    return (
   <>
   <input type='text'onChange={this.textBox}/>
   <button type='submit' onClick={this.buttonSubmitted}></button>
   <h1>{this.state.display}</h1>
   </>
    );
  }
}

export default App;



