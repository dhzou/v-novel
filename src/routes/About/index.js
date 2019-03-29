import React from 'react'
import CustomBreadcrumb from '../../components/CustomBreadcrumb/index'
import TypingCard from '../../components/TypingCard'

export default class About extends React.Component{
  render(){
    return (
      <div>
        <CustomBreadcrumb arr={['关于我们']}/>
        <TypingCard source={'Toka通卡隶属于上海九扩科技有限公司，是一个帮助用户积累社交能量、管理社交资产的价值社交网络。在Toka，每个用户都可以免费创建一张自己的通卡，并使用这张通卡来积累和管理全部的社交资产，实现社交价值的最大化'} title='关于' />
      </div>
    )
  }
}
