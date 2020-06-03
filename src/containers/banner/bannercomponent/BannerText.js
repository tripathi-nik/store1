import React from 'react';
import {useEffect} from 'react';
import {connect,useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Data from '../../../actions/actionCreator';

const mapStateToProps=(state)=>{
  return{
    section_one:state.event.section_one,
  }
}
const BannerText = (props) =>{
  let data = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bindActionCreators(Data.creater2, dispatch));
  },[]);
  const sectionOne = props.section_one;
  data.push(<h1 className="logo-name">{sectionOne!==null?sectionOne.banner.bannertitle:null}</h1>);
  data.push(<h2>{sectionOne!==null?sectionOne.banner.bannersubheading:null}</h2>);
  data.push(<p>{sectionOne!==null?sectionOne.banner.bannercontent:null}</p>);
  return(
    <div class="container">
      <div class="inner text-center">
      {data}
      </div>
    </div>
  )
}
export default connect(mapStateToProps)(BannerText);
