import React from 'react'
import { Form, Input, Row, Col, notification, message } from 'antd'
import './style.css'
import { calculateWidth } from '../../utils/utils'
import PromptBox from '../../components/PromptBox'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react/index'
import 'animate.css'

const url = 'https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/bg1.jpg?raw=true'


@withRouter @inject('appStore') @observer @Form.create()
class LoginForm extends React.Component {
  state = {
    focusItem: -1,   //保存当前聚焦的input
  };



  loginSubmit = (e) => {
    e.preventDefault()
    this.setState({
      focusItem: -1
    })
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const users = this.props.appStore.users
        // 检测用户名是否存在
        const result = users.find(item => item.username === values.username)
        if (!result) {
          this.props.form.setFields({
            username: {
              value: values.username,
              errors: [new Error('用户名不存在')]
            }
          })
          return
        } else {
          //检测密码是否错误
          if (result.password !== values.password) {
            this.props.form.setFields({
              password: {
                value: values.password,
                errors: [new Error('密码错误')]
              }
            })
            return
          }
        }

        this.props.appStore.toggleLogin(true, {username: values.username})

        const {from} = this.props.location.state || {from: {pathname: '/'}}
        this.props.history.push(from)
      }
    })
  }
  register = () => {
    this.props.switchShowBox('register')
  }

  render () {
    const {getFieldDecorator, getFieldError} = this.props.form
    const {focusItem} = this.state
    return (
      <div className={this.props.className}>
        <h3 className='title'>管理员登录</h3>
        <Form onSubmit={this.loginSubmit}>
          <Form.Item help={getFieldError('username') &&
          <PromptBox info={getFieldError('username')} width={calculateWidth(getFieldError('username'))}/>}>
            {getFieldDecorator('username', {
              rules: [{required: true, message: '请输入用户名'}]
            })(
              <Input
                onFocus={() => this.setState({focusItem: 0})}
                onBlur={() => this.setState({focusItem: -1})}
                maxLength={16}
                placeholder='用户名'
                addonBefore={<span className='iconfont icon-User' style={focusItem === 0 ? styles.focus : {}}/>}/>
            )}
          </Form.Item>
          <Form.Item help={getFieldError('password') &&
          <PromptBox info={getFieldError('password')} width={calculateWidth(getFieldError('password'))}/>}>
            {getFieldDecorator('password', {
              rules: [{required: true, message: '请输入密码'}]
            })(
              <Input
                onFocus={() => this.setState({focusItem: 1})}
                onBlur={() => this.setState({focusItem: -1})}
                type='password'
                maxLength={16}
                placeholder='密码'
                addonBefore={<span className='iconfont icon-suo1' style={focusItem === 1 ? styles.focus : {}}/>}/>
            )}
          </Form.Item>

          <div className='bottom'>
            <input className='loginBtn' type="submit" value='登录'/>
          </div>
        </Form>
        <div className='footer'>
          <div>欢迎登陆后台管理系统</div>
        </div>
      </div>
    )
  }
}

@inject('appStore') @observer @Form.create()
class RegisterForm extends React.Component {
  state = {
    focusItem: -1
  }
  registerSubmit = (e) => {
    e.preventDefault()
    this.setState({
      focusItem: -1
    })
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const users = this.props.appStore.users
        // 检测用户名是否存在
        const result = users.find(item => item.username === values.registerUsername)
        if (result) {
          this.props.form.setFields({
            registerUsername: {
              value: values.registerUsername,
              errors: [new Error('用户名已存在')]
            }
          })
          return
        }

        const obj = [...this.props.appStore.users, {
          username: values.registerUsername,
          password: values.registerPassword
        }]
        localStorage.setItem('users', JSON.stringify(obj))
        this.props.appStore.initUsers()
        message.success('注册成功')
      }
    })
  }
  gobackLogin = () => {
    this.props.switchShowBox('login')
    setTimeout(() => this.props.form.resetFields(), 500)
  }

  render () {
    const {getFieldDecorator, getFieldError, getFieldValue} = this.props.form
    const {focusItem} = this.state
    return (
      <div className={this.props.className}>
        <h3 className='title'>管理员注册</h3>
        <Form onSubmit={this.registerSubmit}>
          <Form.Item help={getFieldError('registerUsername') && <PromptBox info={getFieldError('registerUsername')}
                                                                           width={calculateWidth(getFieldError('registerUsername'))}/>}>
            {getFieldDecorator('registerUsername', {
              validateFirst: true,
              rules: [
                {required: true, message: '用户名不能为空'},
                {pattern: '^[^ ]+$', message: '不能输入空格'},
              ]
            })(
              <Input
                onFocus={() => this.setState({focusItem: 0})}
                onBlur={() => this.setState({focusItem: -1})}
                maxLength={16}
                placeholder='用户名'
                addonBefore={<span className='iconfont icon-User' style={focusItem === 0 ? styles.focus : {}}/>}/>
            )}
          </Form.Item>
          <Form.Item help={getFieldError('registerPassword') && <PromptBox info={getFieldError('registerPassword')}
                                                                           width={calculateWidth(getFieldError('registerPassword'))}/>}>
            {getFieldDecorator('registerPassword', {
              validateFirst: true,
              rules: [
                {required: true, message: '密码不能为空'},
                {pattern: '^[^ ]+$', message: '密码不能有空格'}
              ]
            })(
              <Input
                onFocus={() => this.setState({focusItem: 1})}
                onBlur={() => this.setState({focusItem: -1})}
                type='password'
                maxLength={16}
                placeholder='密码'
                addonBefore={<span className='iconfont icon-suo1' style={focusItem === 1 ? styles.focus : {}}/>}/>
            )}
          </Form.Item>
          <Form.Item help={getFieldError('confirmPassword') && <PromptBox info={getFieldError('confirmPassword')}
                                                                          width={calculateWidth(getFieldError('confirmPassword'))}/>}>
            {getFieldDecorator('confirmPassword', {
              validateFirst: true,
              rules: [
                {required: true, message: '请确认密码'},
                {
                  validator: (rule, value, callback) => {
                    if (value && value !== getFieldValue('registerPassword')) {
                      callback('两次输入不一致！')
                    }
                    callback()
                  }
                },
              ]
            })(
              <Input
                onFocus={() => this.setState({focusItem: 2})}
                onBlur={() => this.setState({focusItem: -1})}
                type='password'
                maxLength={16}
                placeholder='确认密码'
                addonBefore={<span className='iconfont icon-suo1' style={focusItem === 2 ? styles.focus : {}}/>}/>
            )}
          </Form.Item>
          <div className='bottom'>
            <input className='loginBtn' type="submit" value='注册'/>
            <span className='registerBtn' onClick={this.gobackLogin}>返回登录</span>
          </div>
        </Form>
        <div className='footer'>
          <div>欢迎登陆后台管理系统</div>
        </div>
      </div>
    )
  }
}

@withRouter @inject('appStore') @observer
class Login extends React.Component {
  state = {
    showBox: 'login',   //展示当前表单
    url: '',  //背景图片
  }

  componentDidMount () {
    const isLogin = this.props.appStore
    if(isLogin){
      this.props.history.go(1)     //当浏览器用后退按钮回到登录页时，判断登录页是否登录，是登录就重定向上个页面
      // this.props.appStore.toggleLogin(false) //也可以设置退出登录
    }
    this.initPage()
  }

  componentWillUnmount () {
    notification.destroy()
  }
  //载入页面时的一些处理
  initPage = () => {
    this.setState({
      loading:true
    })
    this.props.appStore.initUsers()
    this.loadImageAsync(url).then(url=>{
      this.setState({
        loading:false,
        url
      })
    }).then(()=>{
      //为什么写在then里？id为backgroundBox的DOM元素是在loading为false时才有，而上面的setState可能是异步的，必须等到setState执行完成后才去获取dom
      notification.open({
        message:<ul><li>初始账号：admin</li><li>初始密码：admin</li></ul>,
        duration:0,
        className:'login-notification'
      })
    })
  }
  //切换showbox
  switchShowBox = (box) => {
    this.setState({
      showBox: box
    })
  }

  //登录的背景图太大，等载入完后再显示，实际上是图片预加载，
  loadImageAsync (url) {
    return new Promise(function(resolve, reject) {
      const image = new Image();
      image.onload = function() {
        resolve(url);
      };
      image.onerror = function() {
        console.log('图片载入错误')
      };
      image.src = url;
    });
  }

  render () {
    const {showBox} = this.state
    return (
      <div id='login-page'>
            <div>
              <div id='backgroundBox' style={styles.backgroundBox}/>
              <div className='container'>
                <LoginForm
                  className={showBox === 'login' ? 'box showBox' : 'box hiddenBox'}
                  switchShowBox={this.switchShowBox}/>
                <RegisterForm
                  className={showBox === 'register' ? 'box showBox' : 'box hiddenBox'}
                  switchShowBox={this.switchShowBox}/>
              </div>
            </div>
      </div>
    )
  }
}

const styles = {
  backgroundBox: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    backgroundImage: 'url(https://github.com/zhangZhiHao1996/image-store/blob/master/react-admin-master/bg1.jpg?raw=true)',
    backgroundSize: '100% 100%',
    transition:'all .5s'
  },
  focus: {
    width: '20px',
    opacity: 1
  },
  loadingBox:{
    position:'fixed',
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)'
  },
  loadingTitle:{
    position:'fixed',
    top:'50%',
    left:'50%',
    marginLeft: -45,
    marginTop: -18,
    color:'#000',
    fontWeight:500,
    fontSize:24
  },
}

export default Login
