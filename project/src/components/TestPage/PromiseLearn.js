import React from 'react';
import agent from '../../agent';

const TEST_URL = 'https://facebook.github.io/react-native/movies.json';


class PromiseLearn extends React.Component {
  loadingAll() {
    // 一次載入全部資料
    Promise.all([
      fetch(TEST_URL, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      }).then(response => response.json())
        .then(responseJson => {
          console.log('1');
        }).catch((error) => { //使用catch避免請求失敗終止Promise.all
          console.error(error);
        }),
      fetch(TEST_URL, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      }).then(response => response.json())
        .then(responseJson => {
          console.log('2');
        }).catch((error) => { //使用catch避免請求失敗終止Promise.all
          console.error(error);
        }),
      fetch(TEST_URL, {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      }).then(response => response.json())
        .then(responseJson => {
          console.log('3');
        }).catch((error) => { //使用catch避免請求失敗終止Promise.all
          console.error(error);
        }),
    ]).then(res => {
      console.log('載入完畢');
    })
  }

  orderAsyncData() {
    // 照順序處理異步資料
    fetch(TEST_URL, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }).then(response => response.json())
      .then(responseJson => {
        console.log('1');
        return fetch(TEST_URL, {
          method: 'GET',
          headers: {
            Accept: 'application/json'
          }
        }) //將Promise拋出去
      })
      .then(response => response.json())
      .then(responseJson => {
        console.log('2');
        return fetch(TEST_URL, {
          method: 'GET',
          headers: {
            Accept: 'application/json'
          }
        }) //再將Promise拋出去
      })
      .then(responseJson => {
        console.log('3');
        console.log('載入完畢');
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return <div>

      <p>請打開console.log搭配專案程式碼查看！<br />
        一定要專案程式碼 因為檢查原始碼只看的到壓縮後的Code！</p>
      <div>
        <h3>不照順序載入資料</h3>
        <p>點擊F12查看console會發現資料是<span style={{ color: 'red' }}>不照順序</span>載入的</p>
        <button onClick={ev => this.loadingAll()}>不照順序載入資料</button>
        <h3>照順序載入資料</h3>
        <p>點擊F12查看console會發現資料是<span style={{ color: 'red' }}>照順序</span>載入的</p>
        <button onClick={ev => this.orderAsyncData()}>照順序載入資料</button>
      </div>
    </div>
  }
}
export default PromiseLearn;
