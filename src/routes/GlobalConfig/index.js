import React from 'react'
import { Table, Divider, Tag } from 'antd';
import './style.css';
const { Column, ColumnGroup } = Table;

class Index extends React.Component {

constructor(){
  super();
  this.state= {
    data :[{
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    }, {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    }, {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    }]
  }
}

 render(){

  return (
   <Table className='table' dataSource={this.state.data}>
     <Column
       title="序号"
       dataIndex="key"
       key="age"
     />
     <Column
       title="名称"
       dataIndex="address"
       key="address"
     />
     <Column
       title="类型"
       dataIndex="age"
       key="age"
     />
     <Column
       title="数量"
       dataIndex="age"
       key="age"

     />
     <Column
       title="Action"
       key="action"
       render={(text, record) => (
          <a href="javascript:;">编辑</a>
       )}
     />
   </Table>
  )
 }


}


export default Index
