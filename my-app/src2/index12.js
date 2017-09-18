import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Demo extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[1,2,3,4]
        }
        this.addItemBottom=this.addItemBottom.bind(this);
    }
    addItemBottom(){
        this.setState({
            list:this.state.list.concat([4])
        })
    }

    render(){
        return(
            <div>
                {this.state.list.map((item)=> <div>{item}</div>)}
                <button onClick={this.addItemBottom}>尾部插入元素</button>
                <button>头部插入元素</button>
                <button>删除元素</button>
            </div>
        )
    }
}

ReactDOM.render(
    <demo/>,
    document.getElementById('root')
);
