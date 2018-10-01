import React from 'react';
import PropTypes from 'prop-types';
import TableRowCell from './TableRowCell'

// prop-types限制元件屬性
const propTypes = {
  rowData: PropTypes.array, // 列內容陣列
}

// 元件預設屬性
const defaultProps = {
  rowData: [],
}

// 表格內容
const TableRow = ({ rowData, trClassName, tdClassName, trStyle, tdStyle }) =>
  rowData.map((item, index) =>
    <tr key={index} className={trClassName} style={trStyle}>
      <TableRowCell tableDataCell={item} tdClassName={tdClassName} tdStyle={tdStyle} />
    </tr>
  )

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

export default TableRow;
