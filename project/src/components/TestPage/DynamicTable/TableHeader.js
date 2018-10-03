import React from 'react';
import PropTypes from 'prop-types';

// prop-types限制元件屬性
const propTypes = {
  data: PropTypes.array, // 表頭陣列
}

// 元件預設屬性
const defaultProps = {
  data: []
}

// 表頭
const TableHeader = ({
  data,
  className,
  style
}) =>
  <tr>
    {
      data.map((item, index) =>
        <th className={className}
          style={style}
          key={index}
        >
          {item}
        </th>)
    }
  </tr>

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;

export default TableHeader;
