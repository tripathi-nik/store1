import React,{useEffect} from 'react';
import {connect,useDispatch} from 'react-redux';
import {productList,creater3} from '../../actions/actionCreator';
import {Link} from 'react-router-dom';
const mapStateToProps = state => {
  return{
    productTabs:state.event.productTabs,
    productList:state.event.productList
  }
}
const mapDispatchToProp =(dispatch)=>{
  return{
    displayProducts:(value)=>{dispatch(productList(value))},
  }
}
const Products = props => {
 const dispatch = useDispatch();
 useEffect(() => {
   dispatch(creater3())
 },[]);
 const listTabs = props.productTabs;
 const listProducts = props.productList;
 let data = []; let data2 = [];
 if(listTabs!==null){
   listTabs.map((key,index)=>{
     data.push(<li><a className="filter" onClick={()=>{props.displayProducts(key.slug)}}>{key.category}</a></li>);
   });
 }
 if(listProducts!==null){
   listProducts.map((key,index)=>{
     const url = "/products/"+key.id;
     data2.push(<div className="menu-restaurant breakfast"><span className="clearfix"><Link className="menu-title" to={url} data-meal-img="assets/img/restaurant/rib.jpg">{key.title}</Link><span className="menu-line"></span><span className="menu-price">${key.price}</span></span><span className="menu-subtitle">{key.summary}</span></div>);
   });
 }
  return(
    <div class="container">
      <div class="col-md-12 text-center marb-35">
        <h1 class="header-h">Menu List</h1>
        <p class="header-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          <br/>nibh euismod tincidunt ut laoreet dolore magna aliquam. </p>
      </div>

      <div class="col-md-12  text-center" id="menu-flters">
        <ul>
          <li><a className="filter active" onClick={()=>{props.displayProducts('all')}}>Show All</a></li>
          {data}
        </ul>
      </div>
      <div id="menu-wrapper">
        {data2}
      </div>
    </div>
  )
}
export default connect(mapStateToProps,mapDispatchToProp)(Products);
