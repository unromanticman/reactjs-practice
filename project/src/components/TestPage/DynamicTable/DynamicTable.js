import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader'
import TableRow from './TableRow'

// prop-types限制元件屬性
const propTypes = {
  rowData: PropTypes.node,
}

// 動態產生列表
const DynamicTable = ({
  style,
  className,
  children
}) => <table style={style} className={className}>
    {children}
  </table>

DynamicTable.propTypes = propTypes;

export { DynamicTable, TableHeader, TableRow }