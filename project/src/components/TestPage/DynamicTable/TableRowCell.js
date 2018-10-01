import React from 'react';
import PropTypes from 'prop-types';

// prop-types限制元件屬性
const propTypes = {
  tableDataCell: PropTypes.object, // 表頭陣列
}

// 元件預設屬性
const defaultProps = {
  tableDataCell: [],
}

// 表格欄
const TableRowCell = ({ tableDataCell, tdClassName, tdStyle }) =>
  Object.keys(tableDataCell).map((objectItem, index) =>
    <td key={index} className={tdClassName} style={tdStyle}>
      {tableDataCell[objectItem]}
    </td>
  )

TableRowCell.propTypes = propTypes;
TableRowCell.defaultProps = defaultProps;

export default TableRowCell;
