import React from 'react';

class FormPage extends React.Component {
  constructor(props) {
    super(props);
  }
  onSubmitHandle() {
    alert('成功送出');
  }
  render() {
    return (
      <div>
        <h2>表單防呆</h2>
        <form onSubmit={ev => { ev.preventDefault(); this.onSubmitHandle(); }}>
          <label>姓名</label><input type="text" placeholder="請輸入姓名" required></input><br />
          <label>歲數</label><input type="number" placeholder="請輸入歲數"required></input><br />
          <label>號碼</label>
          <select required>
            <option value="">請選擇</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          <br/>
          <button type="submit">送出</button><br />
          <button type="button" onClick={() => alert('這是普通按鈕，不會觸發送出!')}>普通按鈕</button>
        </form>
        描述:利用HTML5的Form防呆，當使用者有未填欄位時不讓他送出。
      </div>
    );
  }
}
export default FormPage;
