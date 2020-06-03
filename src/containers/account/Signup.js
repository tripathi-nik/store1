import React,{Fragment} from 'react';
import classes from './account.module.css';
import Menu from '../banner/bannercomponent/BannerComponent';
import Footer from '../footer/Footer';
import SignupBody from './Signupbody';
let contClass = ['container','contained',classes.coverClass];
const loginForm = () =>{
  return(
       <Fragment>
          <div className={contClass.join(' ')}>
             <Menu/>
          </div>
          <SignupBody/>
          <Footer/>
       </Fragment>
  )

}
export default loginForm;
