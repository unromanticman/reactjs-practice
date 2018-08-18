import React from 'react';
import { compose, withHandlers, withState, lifecycle } from 'recompose'
import agent from './../../agent';
import MovieList from './MovieList';

const enhance = compose(
  withState('value', 'updateValue', 100),
  withState('movies', 'updateMovies', []),
  withHandlers({
    updateValue: props => ev => {
      props.updateValue(ev.target.value);
    },
    send: props => (num1, num2) => ev => {
      console.log("click pass的參數1：" + num1);
      console.log("click pass的參數2：" + num2);
      alert(props.value);
    },
    clean: props => ev => {
      props.updateMovies([]);
    }
    ,
    reload: props => ev => {
      agent.Test.getTestData()
        .then((response) => response.json())
        .then((responseJson) => {
          props.updateMovies(responseJson.movies);
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
  }),
  lifecycle({
    componentDidMount() {
      agent.Test.getTestData()
        .then((response) => response.json())
        .then((responseJson) => {
          this.props.updateMovies(responseJson.movies);
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
  })
)

const RecomposeTestLogic = enhance(({ value, updateValue, send, movies, reload, clean }) =>
  <div>
    - input綁定<br />
    <input onChange={updateValue} value={value} />
    <button onClick={send(100, 200)}>送出</button>
    <br />
    - api呼叫<br />
    <MovieList data={movies} />
    <button onClick={clean}>清除資料</button>
    <button onClick={reload}>載入資料</button>
  </div>
);

export default RecomposeTestLogic;
