import React, { Component } from 'react'
import DisplayStars from './DisplayStars';

export default class ProStars extends Component {
    constructor(props){
        super(props)
    }
  
    render() {
        return (
            <div>
                {/* {this.props.items.map(item => <DisplayStars key={item.id} item={item} getValue={this.getValue} />)} */}
                <DisplayStars item={this.props} />
            </div>
        )
    }
}
