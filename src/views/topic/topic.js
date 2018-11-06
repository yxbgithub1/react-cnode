import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"

import {
    TopicList,
    TopicDetail
} from './index'

export class Topic extends Component {
    render(){
        return (
            <div>
                <h1>Topic</h1>
                <ul>
                    <li><Link to='/topic/list'>全部</Link></li>
                    <li><Link to='/topic/detail'>精华</Link></li>
                    <li>分享</li>
                    <li>问答</li>
                    <li>招聘</li>
                </ul>
                <div>
                    <Route path='/topic/list' component={TopicList}></Route>
                    <Route path='/topic/detail' component={TopicDetail}></Route>
                </div>
            </div>
        )
    }
}

