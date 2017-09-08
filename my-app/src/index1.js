import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state={date:new Date()};
    }
    componentDidMount(){
        this.timeID=setInterval(
            ()=>this.tick(),
            1000
        )
    }
    componentWillUnmount(){
        clearInterval(this.timeID)
    }
    tick(){
        this.setState({
            date:new Date()
        });
    }
    render(){
        return(
            <div>
                <div>this is a clock</div>
                <div>{this.state.date.toLocaleTimeString()}</div>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
);
