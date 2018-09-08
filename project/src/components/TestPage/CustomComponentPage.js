import React from 'react';

/**
 * 練習重複利用component
 */
class CustomComponentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultNumber: 0
    }
  }
  changeDefaultNumber(value) {
    console.log('value', value);
    this.setState({
      defaultNumber: value
    });
  }
  render() {
    return (
      <div>
        練習寫一個重複利用component<br/>
        <label>預設值</label>：<input type="number" value={this.state.defaultNumber} onKeyUp={ev => this.changeDefaultNumber(ev.target.value)} onChange={ev => this.changeDefaultNumber(ev.target.value)}></input><br/>
        請輸入數值，此數值將從父元件更新至子元件！
        <hr/>
        <label>子元件</label>
        <AddsubButton defaultNumber={this.state.defaultNumber} />
      </div>
    );
  }
}

/**
 * 增減數值component
 */
class AddsubButton extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.defaultNumber) //從父層過來的預設值
    this.state = {
      number: props.defaultNumber || 0
    };
  }
  componentWillReceiveProps(props) {
    console.log('props', props); //因為constructor只執行一次，因此由componentWillReceiveProps更新從父層過來的預設值
    this.setState(
      { number: props.defaultNumber || 0 }
    );
  }
  add() {
    this.setState({
      number: Number(this.state.number) + 1
    })
  }
  sub() {
    this.setState({
      number: Number(this.state.number) - 1
    })
  }
  render() {
    const { number } = this.state; //將state上變數解構
    return (
      <div>
        <button onClick={() => this.add()} >增加1</button>
        <button onClick={() => this.sub()}>減少1</button>
        <div>value:{number}</div>
      </div>
    );
  }
}

export default CustomComponentPage;
