import React from 'react';
import classes from './Cart.module.css';
const ProCart = props =>{
  const contArr = ['col-md-12',classes.contArr];
  const secondCont = ['col-md-12',classes.secondCont];
  return(
    <div key={props.key} className={contArr.join(' ')}>
      <div className="col-md-5"><img src={props.image} className={classes.img}/></div>
      <div className="col-md-7">
       <div className={secondCont.join(' ')}>{props.title}</div>
       <div className="col-md-6">{props.qty}X{props.price}</div>
       <div className="col-md-6">${props.qty*props.price} <button onClick={props.onclick}><i className="fa fa-trash-o"></i></button></div>
     </div>
    </div>
  )
}
export default ProCart;
