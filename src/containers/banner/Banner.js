import React from 'react';
import BannerComponent from './bannercomponent/BannerComponent';
import BannerText from './bannercomponent/BannerText';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Data from '../../actions/actionCreator';
const mapStateToProps=(state)=>{
  return{
    section_one:state.event.section_one,
    banner:state.event.banner,
  }
};
class Banner extends React.Component{
  componentDidMount() {
    let { dispatch } = this.props;
    let action = Data.creater2('');
    dispatch(action);
  }
  render(){
    let data = this.props;
    let imgUrl = data.banner;
    let divStyle = {
       backgroundImage: 'url(' + imgUrl + ')'
    }
    return(
      <section id='banner' style={divStyle}>
        <div class="bg-color">
          <header id="header" >
          <BannerComponent/>
          </header>
          <BannerText/>
        </div>
      </section>
    );
  }

}
export default connect(mapStateToProps)(Banner);
