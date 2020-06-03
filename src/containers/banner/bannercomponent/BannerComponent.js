import React,{Fragment} from 'react';
import './bannercomponent.css';
import {connect,useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Creators from '../../../actions/actionCreator';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Minicart from '../../cart/miniCart';
import AdditionalLink from './links';
const mapStateToProps=(state)=>{
  return{
    defaultClass:state.event.defaultClass,
    header_menu:state.event.header_menu
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    toggleClick:(menu)=>{dispatch({type:'Open_Menu',payload:menu})},
    closeBtn:(close)=>{dispatch({type:'Close_Menu',payload:close})}
  }
}
const Banner = props =>{
  const dispatch = useDispatch();
  let data = [];
  useEffect(() => {
    dispatch(Creators.creater('header_menu'));
  },[]);
  const menu = props.header_menu;
  if(menu!==null){
    menu.parent.map((key,id)=>{
      data.push(<Link to={key.url}>{key.title}</Link>)
    });
  }

    return(
    <Fragment>
      <div className="container">
        <div id="mySidenav" className={props.defaultClass}>
          <a class="closebtn" onClick={()=>{props.closeBtn('close')}}>&times;</a>
          {data}
        </div>
        <span onClick={()=>{props.toggleClick('clicked')}}  class="pull-right menu-icon">☰</span>
        <AdditionalLink/>
      </div>
      <Minicart/>
    </Fragment>
    );
  }
export default connect(mapStateToProps,mapDispatchToProps)(Banner);
