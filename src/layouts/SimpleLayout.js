import React from 'react'

export default class SimpleLayout extends React.Component{
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}