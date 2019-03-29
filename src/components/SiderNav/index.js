import React from 'react'
import CustomMenu from "../CustomMenu/index";

const menus = [
  {
    title: '男体素材',
    icon: 'home',
    key: '/home'
  },
  {
    title: '男体全局配置',
    icon: 'home',
    key: '/global/male'
  },
  {
    title: '男性服饰',
    icon: 'home',
    key: '/costume/male'
  },
  // {
  //   title: 'banner',
  //   icon: 'laptop',
  //   key: '/home/banner2',
  //   subs: [
  //     {key: '/home/banner/list', title: '列表', icon: '',},
  //     {key: '/home/banner/list', title: '添加', icon: '',},
  //   ]
  // },
  //
  // {
  //   title: '其它',
  //   icon: 'bulb',
  //   key: '/home/banner3',
  //   subs:[
  //     {key: '/home/banner/list', title: '动画', icon: '',},
  //     {key: '/home/banner/list', title: '画廊', icon: '',},
  //     {key:'/home/banner/list',title:'富文本',icon:''},
  //     {key:'/home/banner/list',title:'加载动画',icon:''},
  //     {key:'/home/banner/list',title:'404',icon:''},
  //     {key:'/home/banner/list',title:'弹性文字',icon:''},
  //   ]
  // },
  {
    title: '关于',
    icon: 'info-circle-o',
    key: '/home/about'
  }
]


class SiderNav extends React.Component {
  render() {

    return (
      <div style={{height: '100vh',overflowY:'scroll'}}>
        <div style={styles.logo}></div>
        <CustomMenu menus={menus}/>
      </div>
    )
  }
}

const styles = {
  logo: {
    height: '32px',
    background: 'rgba(255, 255, 255, .2)',
    margin: '16px'
  }
}

export default SiderNav
