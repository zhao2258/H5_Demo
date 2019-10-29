import styles from './index.css';
import React from 'react';
import { TabBar } from 'antd-mobile';
import router from 'umi/router';
import Home from '../pages/home'
import About from '../pages/about'
import Detail from '../pages/detail'
import Me from '../pages/me'
import SimpleLayout from './SimpleLayout'

export default class BasicLayout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: null,
          hidden: false,
          fullScreen: false,
        };
      }
      componentDidMount=()=>{
        let {pathname} = this.props.location
        this.setState({
          selectedTab:pathname
        })
      }
      render() {
        let {pathname} = this.props.location
        let isSimpleLayout = (pathname != '/home' && pathname != '/about' && pathname != '/me')
        return (
          <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
            {isSimpleLayout ? 
            <SimpleLayout children={this.props.children}/> : 
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
            >
              <TabBar.Item
                title="首页"
                key="首页"
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                />
                }
                selected={this.state.selectedTab === '/home'}
                onPress={() => {
                  router.push('/home');
                  this.setState({
                    selectedTab: '/home',
                  });
                }}
                data-seed="logId"
              >
                {<Home /> && this.props.children}
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                title="关于"
                key="关于"
                selected={this.state.selectedTab === '/about'}
                onPress={() => {
                  router.push('/about');
                  this.setState({
                    selectedTab: '/about',
                  });
                }}
                data-seed="logId1"
              >
                {<About /> && this.props.children}
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                  />
                }
                title="我的"
                key="我的"
                selected={this.state.selectedTab === '/me'}
                onPress={() => {
                  router.push('/me');
                  this.setState({
                    selectedTab: '/me',
                  });
                }}
              >
                {<Me /> && this.props.children}
              </TabBar.Item>
        </TabBar>}
          </div>
        );
      }
}



