import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
	constructor(){
		super()
		this.state={
			isLiked:false
		}
	}
	handleClick(){
		this.setState({
			isLiked:!this.state.isLiked
		})
	}
	render(){
		const btnText=this.props.btnText||{
            likeText:'已赞',unlikeText:'点赞'
		};
		return(
			<button onClick={this.handleClick.bind(this)}>
				{this.state.isLiked?btnText.likeText:btnText.unlikeText}👍</button>
		)
	}
}
ReactDOM.render(
	<App/>,
	document.getElementById('root')
)


