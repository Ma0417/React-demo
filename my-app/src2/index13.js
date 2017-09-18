import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Demo extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[1,2,3,4]
        }
        this.addItemBottom=this.addItemBottom.bind(this);
        this.addItemFromTop=this.addItemFromTop.bind(this);
        this.deleItem=this.deleItem.bind(this);
    }
    addItemBottom(){
        this.setState({
            list:this.state.list.concat([1,2,3])
        })
    }
    addItemFromTop(){
        this.setState({
            list:[1,2,3].concat(this.state.list)
        })
    }
    deleItem(){
        const newList=[...this.state.list];
        newList.pop();
        newList.pop();
        this.setState({
            list:newList
        })
    }
    render(){
        return(
            <div>
                {this.state.list.map((item)=> <div>{item}</div>)}
                <button onClick={this.addItemBottom}>尾部插入元素</button>
                <button onClick={this.addItemFromTop}>头部插入元素</button>
                <button onClick={this.deleItem}>删除元素</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Demo/>,
    document.getElementById('root')
);
