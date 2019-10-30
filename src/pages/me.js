import React from 'react'
import { NavBar, Icon } from 'antd-mobile'

export default class Me extends React.Component{
    render(){
        return (
            <div>
                <NavBar
                    mode="dark"
                    // leftContent="Back"
                    rightContent={[
                        <Icon key="0" type="search" />
                        // <Icon key="1" type="ellipsis" />,
                    ]}
                >我的</NavBar>
                我是我的页！
            </div>
        )
    }
}