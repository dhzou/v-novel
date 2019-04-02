import React from 'react'
import { Form, Input, Row, Col, notification, message } from 'antd'
import './style.css'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react/index'
import 'animate.css'


@withRouter @inject('appStore') @observer
class Login extends React.Component {



  render () {
    return (
      <div id='login-page'>
          <a onClick={this.login.bind(this)}>hhhhhh</a>
      </div>
    )
  }

  login(){

    this.props.appStore.toggleLogin(true, {username: 'dhzou'});
    const {from} = this.props.location.state || {from: {pathname: '/'}}
    this.props.history.push(from)
  }

}

export default Login
