import React from 'react'
import { withRouter, Switch, Redirect ,HashRouter, hashHistory} from 'react-router-dom'
import LoadableComponent from '../../utils/LoadableComponent'
import PrivateRoute from '../PrivateRoute'

const Home = LoadableComponent(()=>import('../../routes/Home/index'))  //参数一定要是函数，否则不会懒加载，只会代码拆分
const UserDetail = LoadableComponent(()=>import ('../../routes/user/detail'));
//关于
const About = LoadableComponent(()=>import('../../routes/About/index'));

const GlobalConfig = LoadableComponent(()=>import('../../routes/GlobalConfig/index'))
const Costume = LoadableComponent(()=>import('../../routes/Costume/index'))

//banner

// const bannerList = LoadableComponent(()=>import('../../routes/banner/list'))

@withRouter
class ContentMain extends React.Component {
  render () {
    return (
      <div style={{padding: 16, position: 'relative'}}>
        <Switch>
          <PrivateRoute exact path='/home' component={Home}/>
          <PrivateRoute exact path='/global/male' component={GlobalConfig}/>
          <PrivateRoute exact path='/costume/male' component={Costume}/>
          <PrivateRoute exact path='/home/about' component={About}/>
          <Redirect exact from='/' to='/home'/>
        </Switch>
      </div>
    )
  }
}

export default ContentMain
