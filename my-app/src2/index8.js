import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class NameForm extends Component{
    constructor(props){
        super(props);
        this.state={value:'coconut'};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            value:event.target.value
        })
    }
    handleSubmit(event){
        alert('the submit name'+this.state.value)
        event.preventDefault();
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    {/*name:*/}
                    {/*<textarea value={this.state.value} onChange={this.handleChange} cols="30" rows="10"></textarea>*/}
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value='Submit'/>
                <p>{this.state.value}</p>
            </form>
        )
    }
}
ReactDOM.render(
    <NameForm/>,
    document.getElementById('root')
);