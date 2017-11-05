import React, { Component } from 'react';

class BandInput extends Component {

  constructor(){
    super()
    this.state = { text: "" }
  }

  handleInputChange(event){
    this.setState({ text: event.target.value })
  }

  handleFormSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_BAND",
      band: this.state.text
    });
    this.setState({ text: "" })
  }

  render() {
    return (
      <div>
        <form onSubmit={ event => this.handleFormSubmit(event) }>
          <input type="text" value={ this.state.text } onChange={ event => this.handleInputChange(event) }/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default BandInput;
