import React from 'react'
import {Card, Button, Table, BackTop} from 'antd'
import CustomBreadcrumb from '../../components/CustomBreadcrumb/index'

var columns = [{
    title: '姓名',
    dataIndex: 'name',
    render: function (text) {
        return <a href="javascript:;">{text}</a>;
    }
}, {
    title: '年龄',
    dataIndex: 'age'
}, {
    title: '住址',
    dataIndex: 'address'
}, {
    title: '操作',
    dataIndex: '',
    render: function (text, record) {
        return (
        <span>
          <a href="javascript:;">操作一</a>
          <span className="ant-divider"></span>
          <a href="javascript:;">操作二</a>
          <span className="ant-divider"></span>
        </span>
        );
    }
}];
var data = [];
for (let i=0; i<46; i++) {
    data.push({
        key: i,
        name: '李大嘴' + i,
        age: 32,
        address: '西湖区湖底公园' + i + '号'
    });
}

export default class Banner extends React.Component {
    constructor() {
        super();
        this.state = {
            data:data,
            current:1,
            total:data.length

        }
    }

    render() {
        return <Table columns={columns}
                      dataSource={this.state.data}
                      pagination={{
                        current:this.state.current,
                        total:this.state.total,
                        onChange:this.changePage.bind(this)}}
                />
    }
    changePage(page) {
        this.setState({current: page});
    }


}

const styles = {
    tableStyle: {
        width: '90%'
    },
    affixBox: {
        position: 'absolute',
        top: 100,
        with: 170
    }
}


