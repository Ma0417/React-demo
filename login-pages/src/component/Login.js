import React,{Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLogin:false
        }
        this.handleLoginShow=this.handleLoginShow.bind(this);
    }
    handleLoginShow(){
        this.setState({
            isLogin:!this.state.isLogin
        })
    }
    render(){
        return(
            <div>
                <div className={this.state.isLogin?"login login-show":"login"}>
                    <h2>登录</h2>
                    <form action="">
                        <input type="text" placeholder="账 号"/>
                        <input type="password" placeholder="密 码"/>
                        <input type="text" placeholder="验证码"/>
                        <div></div>
                        <input type="submit" className="btn" value="登 录"/>
                    </form>
                </div>
                <button className="login-btn" onClick={this.handleLoginShow}>登 录</button>
            </div>
        )
    }
}
export default Login;

