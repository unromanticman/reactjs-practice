import React from 'react';
import { DynamicTable, TableHeader, TableRow } from './DynamicTable/DynamicTable';

const theadData = [
  '名稱',
  '類別',
  '值1',
  '值2',
  '值3',
  '管理'
];

const ButtonEdit = () =>
  <button className="btn btn-edit btn-sm">
    <span>編輯</span>
  </button>

const ButtonDelete = () =>
  <button className="btn btn-edit btn-sm">
    <span>刪除</span>
  </button>

const rowData = [
  {
    id: 1,
    name: "123",
    v1: "v1",
    v2: "v1",
    v3: "v3",
    manage: <span><ButtonEdit /> <ButtonDelete /></span>
  },
  {
    id: 2,
    name: "456",
    v1: "v1",
    v2: "v1",
    v3: "v3",
    manage: <span><ButtonEdit /> <ButtonDelete /></span>
  },
  {
    id: 3,
    name: "789",
    v1: "v1",
    v2: "v1",
    v3: "v3",
    manage: <span><ButtonEdit /> <ButtonDelete /></span>
  },
  {
    id: 3,
    name: "789",
    v1: "v1",
    v2: "v1",
    v3: "v3",
    manage: <span><ButtonEdit /> <ButtonDelete /></span>
  }
];

class TableTest extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <DynamicTable className="table table-striped main-table">
      <thead>
        <TableHeader data={theadData} />
      </thead>
      <tbody>
        <TableRow data={rowData} />
      </tbody>
    </DynamicTable>
  }
}

export default TableTest;
