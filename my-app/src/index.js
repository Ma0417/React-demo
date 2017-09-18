import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './component/Kanbanboard';


let cardsList=[
    {
        id:1,
        title:'读书',
        description:'读《深入浅出react-redux》',
        status:'in-propgress',
        tasks:[]
    },
    {
        id:2,
        title:"写代码",
        description:'写一些小组件',
        status:'todo',
        tasks:[
            {
                id:1,
                name:'音乐播放器',
                done:true
            },
            {
                id:2,
                name:'写todo应用',
                done:'false'
            },
            {
                id:3,
                name:'写看板组件',
                done:'flase'
            }
        ]
    }
]


ReactDOM.render(

    <KanbanBoard />,
    document.getElementById('root')
)