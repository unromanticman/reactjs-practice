import React from 'react';
import PropTypes from 'prop-types';

// prop-types限制元件屬性
const propTypes = {
  theadData: PropTypes.array, // 表頭陣列
}

// 元件預設屬性
const defaultProps = {
  theadData: [],
}

// 表頭
const TableThead = ({ theadData, thClassName, thStyle }) =>
  theadData.map((item, index) => <th key={index} style={thStyle} className={thClassName}>{item}</th>)

TableThead.propTypes = propTypes;
TableThead.defaultProps = defaultProps;

export default TableThead;
