import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject(store => ({
    detail:store.topic.detail
}))
@observer
export class TopicDetail extends Component {
    render(){
        return (
            <div>详情页面</div>
        )
    }
}
