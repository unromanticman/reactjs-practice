import React from 'react';
import CustomButton from './CCC';

class PropTypeRestrict extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      c: "123"
    }
  }
  clickHandler() {
    alert('Hi');
  }
  render() {
    return <div>
      <CustomButton onClick={ev => this.clickHandler()}>{this.state.c}</CustomButton>
    </div>
  }
}
export default PropTypeRestrict;
