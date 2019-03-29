import React from 'react'
import CharacterCover from '../../components/CharacterCover/index'
import { Modal,Form,Input,Button } from 'antd';
import './style.css'

class Home extends React.Component {
  constructor() {
    super();
   this.state = { visible: false }
  }

  render() {

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    return <div className='flex'>

             <div className='new-cover'>
             </div>
      {
        [1,2,3,4,5,6,7].map((item,i) => (

          <CharacterCover onClick={this.onItemClick.bind(this)}/>
        ))

      }

      <Modal
        title="编辑素体"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item
            label="名称:"
          >
          <Input />
          </Form.Item>
          <Form.Item
            label="形象展示图"
          >
              <Input type="password" />
            <Button type="primary" htmlType="submit">上传</Button>
          </Form.Item>
          <Form.Item
            label="素体图"
          >
            <Input type="password" />
            <Button type="primary" htmlType="submit">上传</Button>
          </Form.Item>

        </Form>
      </Modal>
    </div>
  }

   onItemClick(ev) {
    switch (ev.type) {
      case 0:
        alert('detail');
        break;
      case 1:
        this.showModal();
        break;
      default:break;

    }
   }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }



}


export default Home
