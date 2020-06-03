import React, {Component,Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch,connect} from 'react-redux';
import * as Kete from '../../actions/productCreator'
import Toast from '../../toasts/ToastMessage';
import '../../toasts/toastMessage.css';
import {Formik} from 'formik';
import classes from './Cart.module.css'
const mapStateToProps=(state)=>{
  const prod = state.product;
  return{
    addedToCart:prod.addedToCart,
    carting:prod.carting,
    displayMessage:prod.displayMessage,
    toastMessage:prod.toastMessage

  }
}

const Cart = props =>{
  const dispatch = useDispatch();
  let data = "show";

  return(
  <Fragment>
    {props.displayMessage==='true'&&
    <Toast message={props.toastMessage} show="show" state="true"/>}
    <h1>{props.title}</h1>
     { props.addedToCart==='requested'&&
     <img src="http://localhost/reactApi/wp-content/uploads/2020/05/4cf423dc7c2321aa9b733c20c53752b7.gif" className={classes.imageCss}/>
     }
    <Formik initialValues={{proId:props.proId,qty:1,imageUrl:props.imageurl,title:props.title,price:props.price}} onSubmit={(values, {setSubmitting})=>{
      dispatch({type:'Add_Loader',payload:'requested'})
        dispatch({type:'addToCart',payload:values})
        dispatch({type:'DisplayMessage',payload:values.title+' Added Successfully To Cart'})
     }}
    >
    {props=>{
      const {
        values,isSubmitting,handleChange,handleBlur,handleSubmit
      }=props;
      return(
        <form onSubmit={handleSubmit}>
          <div className="form-group col-md-12">
           <input type="hidden" name="proId" value={values.proId} />
           <input type="hidden" name="imageUrl" value={values.imageUrl} />
            <input type="hidden" name="title" value={values.title} />
            <input type="hidden" name="price" value={values.price} />
            <select name="qty" value={values.qty} onChange={handleChange}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </div>
          <div className="form-group">
             <button type="submit">Save</button>
          </div>
        </form>
      )
    }}
    </Formik>
    </Fragment>
  )
}
export default connect(mapStateToProps)(Cart);
