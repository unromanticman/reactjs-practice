import React from 'react';

/**
 * 一個無生命週期的 Component，SFC（Stateless Functional Component）版本
 */
const MovieList = ({ data }) => {
  return <ul>
    {
      data.map((item) =>
        <li key={item.id}>
          {item.id}{item.title}{item.releaseYear}
        </li>
      )
    }
  </ul>
}

export default MovieList;
