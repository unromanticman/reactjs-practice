import React from 'react';
import PropTypes from 'prop-types';
import TableThead from './TableThead'
import TableRow from './TableRow'

// prop-types限制元件屬性
const propTypes = {
  theadData: PropTypes.array, // 表頭陣列
  rowData: PropTypes.array, // 列內容陣列
  //類名
  tableClassName: PropTypes.any,
  theadClassName: PropTypes.any,
  tbodyClassName: PropTypes.any,
  thClassName: PropTypes.any,
  trClassName: PropTypes.any,
  tdClassName: PropTypes.any,
  //樣式名
  tableStyle: PropTypes.any,
  theadStyle: PropTypes.any,
  tbodyStyle: PropTypes.any,
  thStyle: PropTypes.any,
  trStyle: PropTypes.any,
  tdStyle: PropTypes.any,
}

// 元件預設屬性
const defaultProps = {
  theadData: [],
  rowData: [],
  tableClassName: null,
  theadClassName: null,
  tbodyClassName: null,
  thClassName: null,
  trClassName: null,
  tdClassName: null,
  tableStyle: null,
  theadStyle: null,
  tbodyStyle: null,
  thStyle: null,
  trStyle: null,
  tdStyle: null,
}

// 動態產生列表
const DynamicTabel = ({
  theadData,
  rowData,
  trClassName,
  tdClassName,
  thClassName,
  tableClassName,
  theadClassName,
  tbodyClassName,
  tableStyle,
  theadStyle,
  tbodyStyle,
  thStyle,
  trStyle,
  tdStyle
}) =>
  <table className={tableClassName} style={tableStyle}>
    <thead className={theadClassName} style={theadStyle}>
      <tr className={trClassName} style={trStyle}>
        <TableThead
          theadData={theadData}
          thClassName={thClassName}
          trClassName={trClassName}
          thStyle={thStyle}
          trStyle={trStyle}
        />
      </tr>
    </thead>
    <tbody className={tbodyClassName} style={tbodyStyle}>
      <TableRow
        rowData={rowData}
        trClassName={trClassName}
        tdClassName={tdClassName}
        trStyle={trStyle}
        tdStyle={tdStyle}
      />
    </tbody>
  </table>

DynamicTabel.propTypes = propTypes;
DynamicTabel.defaultProps = defaultProps;

export default DynamicTabel;
