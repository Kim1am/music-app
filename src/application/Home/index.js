import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Top, Tab, TabItem } from './style'
import { NavLink } from 'react-router-dom' // 利用 NavLink 组件进行路由跳转
function Home(props) {
  const { route } = props

  return (
    <div>
      {/* 头部 */}
      <Top>
        <span className='iconfont menu'>&#xe65c;</span>
        <span className='title'>Web App</span>
        <span className='iconfont search'>&#xe62b;</span>
      </Top>
      {/* 导航栏 */}
      <Tab>
        {/* 路由按钮 */}
        <NavLink to='/recommend' activeClassName='selected'>
          <TabItem>
            <span> 推荐 </span>
          </TabItem>
        </NavLink>
        <NavLink to='/singers' activeClassName='selected'>
          <TabItem>
            <span> 歌手 </span>
          </TabItem>
        </NavLink>
        <NavLink to='/rank' activeClassName='selected'>
          <TabItem>
            <span> 排行榜 </span>
          </TabItem>
        </NavLink>
      </Tab>
      {/* 路由视图渲染 */}
      {renderRoutes(route.routes)}
    </div>
  )
}

export default React.memo(Home)
