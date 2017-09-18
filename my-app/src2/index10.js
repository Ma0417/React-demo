import React,{Component} from 'react';
import ReactDOM from 'react-dom';

var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
class SearchBar extends Component{
    constructor(props){
        super(props);
        this.handleFilterTextInputChange=this.handleFilterTextInputChange.bind(this);
        this.handleInStockInputChange=this.handleInStockInputChange.bind(this);
    }

    handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
    }

    handleInStockInputChange(e) {
        this.props.onInStockInput(e.target.checked);
    }
    render(){
        return (
            <form>
                <input type="text" placeholder="Search..." onChange={this.handleFilterTextInputChange} value={this.props.filterText}/>
                <p>
                    <input type="checkbox" onChange={this.handleInStockInputChange} checked={this.props.isFilter}/>
                    { ' ' }
                    只显示未过期的
                </p>
            </form>
        )
    }
}
class ProductTitle extends Component{
    render(){
        return(
            <tr>
                <th colSpan='2'>{this.props.category}</th>
            </tr>
        )
    }
}
class ProductRow extends Component{
    render(){
        var name=this.props.product.stocked ? this.props.product.name :
            <span style={{color:'red'}}>
                {this.props.product.name}
            </span>;
         return (
             <tr>
                 <td>{name}</td>
                 <td>{this.props.product.price}</td>
             </tr>
         )
    }
}
class ProductTable extends Component{

    render(){
        var rows=[];
        var lastCategory=null;
        this.props.products.forEach((product)=>{
           if(product.name.indexOf(this.props.filterText)===-1 ||
               (!product.stocked&&this.props.isFilter)){
               return;
           }
           if(product.category!==lastCategory){
               rows.push(<ProductTitle category={product.category}
               key={product.category}/>);
           }
           rows.push(<ProductRow product={product} key={product.name}/>);
           lastCategory=product.category;
        });
       return (
           <table>
               <thead>
                    <tr>
                        <th>名称</th>
                        <th>价格</th>
                    </tr>
               </thead>
               <tbody>{rows}</tbody>
           </table>
       )
    }
}

class Fileter extends Component{
    constructor(props){
        super(props);
        this.state={
            filterText:'',
            isFilter:false
        }
        this.handleFilterTextInput=this.handleFilterTextInput.bind(this);
        this.handleInStockInput=this.handleInStockInput.bind(this);
    }
    handleFilterTextInput(filterText){
        this.setState({
            filterText:filterText
        })
    }
    handleInStockInput(isFilter){
        this.setState({
            isFilter:isFilter
        })
    }
    render(){
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    isFilter={this.state.isFilter}
                    onFilterTextInput={this.handleFilterTextInput}
                    onInStockInput={this.handleInStockInput}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    isFilter={this.state.isFilter}
                />
            </div>
        )
    }

}
ReactDOM.render(
    <Fileter products={PRODUCTS}/>,
    document.getElementById('root')
);
