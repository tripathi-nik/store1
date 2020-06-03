import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import './bannercomponent.css';
const Links = () =>{
  return(
    <Fragment>
     <Link to="/signup" className="loginLink"><i className="fa fa-user-circle-o"></i></Link>
    </Fragment>
  )
}
export default Links;
