import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Router,Route,Link,IndexRoute } from 'react-router';

const Dashaboard=class Dashaboard extends Component{
    render(){
        return <div>Welcome to the app</div>
    }
}

const App=class App extends Component{
    render(){
        return(
            <div>
                <h1>APP</h1>
                <ul>
                    <li><Link to="/about"></Link>About</li>
                    <li><Link to="/inbox"></Link>Inbox</li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
const About=class About extends Component{
    render(){
        return <h3>About</h3>
    }
}

const Inbox=class Inbox extends Component{
    render(){
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || "Welcome to you Inbox"}
            </div>
        )
    }
}
const Message=class Message extends Component{
    render(){
        return <h3>Message {this.props.params.id}</h3>
    }
}

ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Dashaboard}/>
            <Route path="about" component={About}/>
            <Route path="inbox" component={Inbox}>
                <Route path="messages/:id" component={Message}/>
            </Route>
        </Route>
    </Router>,
    document.getElementById('root')
);
