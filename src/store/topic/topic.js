import fetch from 'http'
import { Component } from 'react';
import { observable, action } from 'mobx'


class Topic extends Component {

    @observable topics = []

    /**
     * 主题列表
     * @memberof Topic
     */
    @action topicList = async () => {
        let { data } = await fetch({
            api   : 'topics',
            method: 'get'
        })
        this.topics = data;
        console.log(data);
    }

    /**
     * 主题详情
     * @memberof Topic
     */
    @action topicDetail = () => {
        
    }

    /**
     * 主题删除
     * @memberof Topic
     */
    @action topicDelete = () => this.topics.shift()

    /**
     * 主题新增
     * @memberof Topic
     */
    @action topicAdd = () => {

    }
}

export default new Topic()