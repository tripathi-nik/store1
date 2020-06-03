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
const TopComponent = props=>{
  let data = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bindActionCreators(Data.creater2, dispatch));
  },[]);
  const sectionOne = props.section_one;
  data.push(<h1 class="header-h">{props.section_one!==null?props.section_one.section_one.title:null}</h1>);
  data.push(  <p class="header-p">{props.section_one!==null?props.section_one.section_one.desc:null}</p>);
  return(
    <React.Fragment>
      <div class="col-md-12 text-center marb-35">
        {data}
      </div>
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <div class="col-md-6 col-sm-6">
          <div class="about-info">
            <h2 class="heading">{props.section_one!==null?props.section_one.section_one.subheading:null}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero impedit inventore culpa vero accusamus in nostrum dignissimos modi, molestiae. Autem iusto esse necessitatibus ex corporis earum quaerat voluptates quibusdam dicta!</p>
            <div class="details-list">
              <ul>
                <li><i class="fa fa-check"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li><i class="fa fa-check"></i>Quisque finibus eu lorem quis elementum</li>
                <li><i class="fa fa-check"></i>Vivamus accumsan porttitor justo sed </li>
                <li><i class="fa fa-check"></i>Curabitur at massa id tortor fermentum luctus</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-sm-6">
          <img src={props.section_one!==null?props.section_one.section_one.image.url:null} alt={props.section_one!==null?props.section_one.section_one.image.alt:null} class="img-responsive"/>
        </div>
      </div>
      <div class="col-md-1"></div>
    </React.Fragment>
);
}
export default connect(mapStateToProps)(TopComponent);
