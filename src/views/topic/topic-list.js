import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

//注入状态
@inject(store => ({
    topics     : store.topic.topics,     //主题
    topicList  : store.topic.topicList,  //获取主题列表
    topicDelete: store.topic.topicDelete
}))
//@inject('topic')
//组件监听
@observer
export class TopicList extends Component{

    componentDidMount(){
        this.props.topicList();
    }

    render(){
        const { topics } = this.props
        return(
            <div>
                <button onClick={ this.props.topicDelete }>更新数据</button>
                <ul>
                    {
                        topics.map((item, index) =>
                            <li key={index}>
                                { item.title }
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}