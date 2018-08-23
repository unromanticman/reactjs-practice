import React from 'react';
const responseJson = [{ name: '小明', things: ['小明的筆', '小明的紙'] }, { name: '小方', things: ['小方的筆', '小方的紙'] }];

class GearingSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectName: responseJson[0].name,
      selectThing: responseJson[0].things[0],
    }
  };

  changeName(e) {
    this.setState({ selectName: e.target.value });
    responseJson.map((item, index) => {
      if (e.target.value === item.name) {
        this.setState({ selectThing: item.things[0] });
      }
      return true;
    })
  };

  changeThings(e) {
    this.setState({ selectThing: e.target.value });
  };

  render() {
    const names = responseJson.map((item, index) => {
      return <option key={index}>{item.name}</option>
    });
    const things = responseJson.map((item, index) => {
      if (this.state.selectName == item.name) {
        return item.things.map((item, index) =>
          <option key={index}>{item}</option>
        )
      }
      return true;
    });

    return (
      <div>
        <div>關聯式下拉選單</div>
        <select value={this.state.selectName} onChange={this.changeName.bind(this)}>{names}</select>
        <select value={this.state.selectThing} onChange={this.changeThings.bind(this)}>{things}</select>
        <br />
        <br />
      </div>
    );
  }
};
export default GearingSelect;
