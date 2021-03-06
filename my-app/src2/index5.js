import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index5.css';

function WarningBanner(props) {
    if(!props.warn){
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}
class Page extends Component{
    constructor(props){
        super(props);
        this.state={showWarning:true}
        this.handleToggleClick=this.handleToggleClick.bind(this);
    }
    handleToggleClick(){
        this.setState(prevState=>({
            showWarning:!prevState.showWarning
        }))
    }
    render(){
        return(
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'hide' :'show'}
                </button>
            </div>
        )
    }
}

ReactDOM.render(<Page/>, document.getElementById('root'));