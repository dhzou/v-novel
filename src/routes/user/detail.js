import React from 'react'
import {Table} from 'antd'

const data = [];
for (let i = 0; i < 3; i++) {
    data.push({
        key: i,
        nickName: '李大嘴' + i,
        tokaCode: 3289,
        phone: '13986836157',
        createTIme: "2017-09-12"
    });
}

class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            data: data,
            current: 1,
            total: data.length

        }
    }

    render() {
        return <div>{this.props.location.state.id}</div>
    }



}


export default Detail
