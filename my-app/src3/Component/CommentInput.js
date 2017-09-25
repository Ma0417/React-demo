import React,{Component,PropTypes} from 'react';
class CommentInput extends Component{

    constructor(){
        super();
        this.state={
            username:'',
            content:''
        }
        this.handleUsernameChange=this.handleUsernameChange.bind(this);
        this.handleContentChange=this.handleContentChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleUsernameBlur=this.handleUsernameBlur.bind(this);
    }
    handleUsernameChange(event){
        this.setState({
            username:event.target.value
        })
    }
    componentWillMount(){
        this._loadUsername()
    }
    _loadUsername(){
        const username=localStorage.getItem('username');
        if(username){
            this.setState({username})
        }
    }
    componentDidMount(){
        this.textarea.focus();
    }

    handleContentChange(event){
        this.setState({
            content:event.target.value
        })
    }
    handleSubmit(){
        if(this.props.onSubmit){
            // const {username,content}=this.state;
            this.props.onSubmit({
                username:this.state.username,
                content:this.state.content,
                createdTime:+new Date()
            })
        }
        this.setState({
            content:''
        })
    }
    _saveUsername(username){
        localStorage.setItem('username',username)
    }
    handleUsernameBlur(event){
        this._saveUsername(event.target.value)
    }
    render(){
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名:</span>
                    <div className="comment-field-input">
                        <input onBlur={this.handleUsernameBlur}  type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容</span>
                    <div className="comment-field-input">
                        <textarea ref={(textarea)=>this.textarea=textarea} value={this.state.content} onChange={this.handleContentChange}/>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit}>发布</button>
                </div>
            </div>
        )
    }
}
CommentInput.propTypes={
    onSubmit:PropTypes.func
}
export default CommentInput;