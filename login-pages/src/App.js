import React,{Component} from 'react';
import Bgimg from "./component/Bgimg";
import Title from "./component/Title";
import Data from "./component/Data";
import Footer from "./component/Footer";
import Login from "./component/Login";


class App extends Component{
    render(){
        return (
            <div className="container">
                <Bgimg/>
                <Title/>
                <Data/>
                <Footer/>
                <Login/>
            </div>
        )
    }
}
export default App;