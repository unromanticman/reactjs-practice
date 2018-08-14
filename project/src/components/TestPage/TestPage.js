import React from 'react';
import { connect } from 'react-redux';
import agent from './../../agent';
import { SET_TESTDATA, CLEAN_TESTDATA } from './../../constants/actionTypes';
import MovieList from './MovieList';
import Loginout from './Loginout';

const mapStateToProps = state => ({
  ...state,
  testdata: state.testpage.testdata,
});
const mapDispatchToProps = dispatch => ({
  setTestData: testdata =>
    dispatch({ type: SET_TESTDATA, payload: { data: testdata } }),
  cleanTestData: () =>
    dispatch({ type: CLEAN_TESTDATA, payload: {} }),
});

class TestPage extends React.Component {
  componentDidMount() {
    agent.Test.getTestData()
      .then((response) => response.json())
      .then((responseJson) => {
        this.props.setTestData(responseJson.movies);
        console.log(responseJson);
        // 取得的JSON如下
        // {
        //   "title": "The Basics - Networking",
        //   "description": "Your app fetched this from a remote endpoint!",
        //   "movies": [
        //     { "id": "1", "title": "Star Wars", "releaseYear": "1977" },
        //     { "id": "2", "title": "Back to the Future", "releaseYear": "1985" },
        //     { "id": "3", "title": "The Matrix", "releaseYear": "1999" },
        //     { "id": "4", "title": "Inception", "releaseYear": "2010" },
        //     { "id": "5", "title": "Interstellar", "releaseYear": "2014" }
        //   ]
        // } 
      })
      .catch((error) => {
        console.error(error);
      });
  }
  cleandata = () => {
    alert('清空');
    this.props.cleanTestData();
  }
  reloaddata = () => {
    alert('重新載入資料');
    agent.Test.getTestData()
      .then((response) => response.json())
      .then((responseJson) => {
        this.props.setTestData(responseJson.movies);
        console.log(responseJson);
        // 取得的JSON如下
        // {
        //   "title": "The Basics - Networking",
        //   "description": "Your app fetched this from a remote endpoint!",
        //   "movies": [
        //     { "id": "1", "title": "Star Wars", "releaseYear": "1977" },
        //     { "id": "2", "title": "Back to the Future", "releaseYear": "1985" },
        //     { "id": "3", "title": "The Matrix", "releaseYear": "1999" },
        //     { "id": "4", "title": "Inception", "releaseYear": "2010" },
        //     { "id": "5", "title": "Interstellar", "releaseYear": "2014" }
        //   ]
        // } 
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <div>
        <div>
          測試頁面
        </div>
        <div>
          <MovieList data={this.props.testdata} />
          <button onClick={this.cleandata}>清空資料</button>
          <button onClick={this.reloaddata}>重新載入資料</button>
        </div>
        <br />
        <div>
          <Loginout />
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TestPage);