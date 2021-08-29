import React from 'react';
import './Form.css'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ime: '' };
  }
  postaviIme = (event) => {
    this.setState({ime: event.target.value});
  }
  render() {
    return (
      <form className="form">
        <div className="form-input">
          <p>Vaše ime:</p>
          <input type='text' onChange={this.postaviIme}/>
        </div>
        <p>Zdravo {this.state.ime}, dobrodošli na stranicu škole engleskog jezika Rainbow!
        U toku je upis u novu školsku godinu. </p>
      
        
      </form>
    );
  }
}

export default Form;


