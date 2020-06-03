import React,{useRef,useEffect} from 'react';
import {connect,useDispatch} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './account.module.css';
import {accountCreater} from '../../actions/accountCreator';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Toast from '../../toasts/ToastMessage';
import { useHistory } from "react-router-dom";
import Recaptcha from "react-recaptcha";

const mapStateToProps = (state)=>{
  const mess = state.message;
  const acc = state.account;
  return{
    signupHeader:mess.signupHeader,
    status:acc.status,
    message:acc.message,
    loading:acc.loading,
    userid:acc.userid
  }
}
const checkRedirection = (history,userId) =>{
  const url = "/user/"+userId;
  setTimeout(() => {
   history.push(url);
 }, 3000);
}
const Body = props =>{
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  },[]);
  const referrer = useRef();
  const enableBtn = useRef();
  const dispatch = useDispatch();
  let loader = props.loading;
  let status = props.status;
  let message = props.message;
  let userId = props.userid;
  const history = useHistory();
    return(
    <div className="col-md-12">
    {status===200&&
    <Toast message={message} show="show" state="true"/>}
      <h1 className={classes.headingText}>{props.signupHeader}</h1>
       {console.log(status)}
      <Formik initialValues={{name:'',email:'',age:'',password:'',address:'',recaptcha: ""}} onSubmit={(values, {setSubmitting})=>{
       dispatch({type:'add_loader',payload:'load'});
        dispatch(accountCreater(values));
       }}
       validationSchema = {Yup.object().shape({
         address:Yup.string().required("Required"),
         email:Yup.string().email().required("Email must be required and should be in a valid format"),
         name:Yup.string().required("Required"),
         password:Yup.string().required("Required"),
         age:Yup.number().required("Required"),
         recaptcha: Yup.string().required(),
       })}
      >
      {props=>{
        const {
          values,touched,errors,isSubmitting,handleChange,handleBlur,handleSubmit,setFieldValue
        }=props;
        const testData = () =>{
          status=null;
          referrer.current.classList.remove('error');
        }
        if(status===400){
          referrer.current.focus();
          referrer.current.classList.add('error');
          enableBtn.current.removeAttribute('disabled');
          errors.email=message;
        }
        if(status===200){
          enableBtn.current.setAttribute('disabled',true);
          referrer.current.classList.remove('error');
          errors.email=null;
          checkRedirection(history,userId);
        }
        return(
            <form onSubmit={handleSubmit} className="col-md-4">
               <div className="form-group">
                 <input type="text" name="name" placeholder="Enter your name" value={values.name} className="form-control" onChange={handleChange} onBlur={handleBlur}/>
                  {errors.name&&touched.name&&(
                    <div>{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input type="email" name="email" id="uniqueEmail" placeholder="Enter your email"  className="form-control" onChange={(e)=>{
                                                                                                                           props.handleChange(e);
                                                                                                                           testData()}}onBlur={handleBlur} ref={referrer} />
                  {errors.email&&touched.email&&(
                    <div>{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input type="password" name="password" placeholder="Enter your password" value={values.password} className="form-control" onChange={handleChange} onBlur={handleBlur}/>
                  {errors.password&&touched.password&&(
                    <div>{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <input type="number" name="age" placeholder="Enter your age" value={values.age} className="form-control" onChange={handleChange} onBlur={handleBlur}/>
                  {errors.age&&touched.age&&(
                    <div>{errors.age}</div>
                  )}
                </div>
                <div className="form-group">
                  <input type="text" name="address" placeholder="Enter your address" value={values.address} className="form-control" onChange={handleChange} onBlur={handleBlur}/>
                  {errors.address&&touched.address&&(
                    <div>{errors.address}</div>
                  )}

                </div>
                <div className="form-group">
                  <label>Recaptcha Validation</label>
                  <Recaptcha
                    sitekey="6Le2nREUAAAAALYuOv7X9Fe3ysDmOmghtj0dbCKW"
                    render="explicit"
                    theme="dark"
                    verifyCallback={(response) => { setFieldValue("recaptcha", response); }}
                    onloadCallback={() => { console.log("done loading!"); }}
                  />
                  {errors.recaptcha
                    && touched.recaptcha && (
                    <p>{errors.recaptcha}</p>
                  )}
                </div>
                <div>
                { loader!==null&&
                 <img src="http://localhost/reactApi/wp-content/uploads/2020/05/4cf423dc7c2321aa9b733c20c53752b7.gif" className={classes.imageCss}/>
                }
              </div>
              <button className="btn btn-success" type="submit" ref={enableBtn}>Create Account</button>

            </form>
        )
      }}
      </Formik>
    </div>
  )
}
export default connect(mapStateToProps)(Body);
