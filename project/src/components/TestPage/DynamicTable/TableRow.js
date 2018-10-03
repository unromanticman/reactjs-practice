import React from 'react';
import PropTypes from 'prop-types';
import TableRowCell from './TableRowCell'

// prop-types限制元件屬性
const propTypes = {
  data: PropTypes.array, // 列內容陣列
}

// 元件預設屬性
const defaultProps = {
  data: [],
}

// 表格內容
const TableRow = ({ data, className, style }) =>
  data.map((item, index) =>
    <tr style={style} className={className} key={index}>
      <TableRowCell tableDataCell={item} />
    </tr>
  )

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

export default TableRow;
