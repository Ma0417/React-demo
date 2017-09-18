import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Demo extends Component{
    constructor(props){
        super(props);
        this.state={
            list:this.props.dataArr
        }
    }
    toggleChecked(event){
        let checked=event.target.checked;
        let index=event.target.getAttribute("data-index");
        let list=this.state.list;
        list[index].checked=checked;
        this.setState=({list})
    }
    render(){
        return(
            <ul>
                {this.state.list.map((data,index)=>{
                    return (
                        <ListItem data={data} index={index} key={data.name}
                        toggleChecked={this.toggleChecked}/>
                    )
                })}
            </ul>
        )
    }
}
class ListItem extends Component{
    render(){
        let data=this.props.data;
        let index=this.props.index;
        return(
            <li>
                <input type="checkbox" data-index={index} checked={data.checked} onChange={this.props.toggleChecked}/>
                <span>{data.name}</span>
            </li>
        )
    }
}
let dataArr=[];
for(let i=0;i<2000;i++){
    let checked=Math.random()<0.5;
    dataArr.push({
        name:i,
        checked
    })
}
ReactDOM.render(
    <Demo dataArr={dataArr}/>,
    document.getElementById('root')
);
