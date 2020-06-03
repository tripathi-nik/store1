import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Cart.module.css';
import {connect} from 'react-redux';
import {deleteItems} from '../../actions/productCreator';
import ProducrCart from './ProductCart';
const mapStateToProps=(state)=>{
  const prod = state.product;
  return{
    carting:prod.carting,
    added:prod.added,
    setdelete:prod.setdelete,
  }
}
const mapDispatchToProp =(dispatch)=>{
  return{
    setDelete:()=>{dispatch({type:'ChangeDelete',payload:null})},
    deleteCartItem:(value)=>{dispatch({type:'DeleteItem',payload:value})}
  }
}
const deleteCartItem = (props,value) =>{
  props.setDelete();
  props.deleteCartItem(value);
}
const Minicart = props =>{
  const [show,setShow] = useState(false);
  const resetShow = ()=> setShow(!show);
  let arr = [];
  let icon = [];
  icon.push('fa','fa-shopping-cart',classes.carter);
  arr.push('col-md-2',classes.minicart);
  if(show===false){
    arr.push('hidden');
  }
  if(props.added!==null){
    arr.push('added');
  }
  if(props.setdelete!==null){
    arr.push('deleted');
  }
  let cartArr = props.carting;
  let num = cartArr?cartArr.length:0;
  let products = [];
  console.log(cartArr);
  if(num>0){
    cartArr.map((key,values) =>
      products.push(<ProducrCart key={key.proId} image={key.imageUrl} qty={key.qty} title={key.title} price={key.price} onclick={()=>deleteCartItem(props,key.proId)}/>)
   )
 }
  return(
   <div className="carts">
    <sup className={classes.super}>{num}</sup>
    <button className={classes.float} onClick={resetShow}>
      <i className={icon.join(' ')}></i>
     </button>
    <div className={arr.join(' ')}>
     {products.length>0&&
       <div className ="table-responsive">
         {products}
       </div>
     }
    </div>
  </div>
  )
}
export default connect(mapStateToProps,mapDispatchToProp)(Minicart);
