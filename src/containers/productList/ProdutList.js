import React, {Component,Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../banner/bannercomponent/BannerComponent';
import Carousel from 'react-bootstrap/Carousel'
import {connect} from 'react-redux';
import {productDetail} from '../../actions/productCreator'
import { ImageZoom } from 'react-simple-image-zoom';
import Cart from '../cart/Cart';
const mapStateToProps=(state)=>{
  const prod = state.product;
  return{
    corousel:prod.corousel,
    header_color:prod.headerColor,
    currentProduct:prod.currentProduct,
    lkey:prod.lkey
  }
}

class ProductList extends Component{
  componentDidMount(){
   let { dispatch } = this.props;
   let action = productDetail(this.props.match.params.prodId);
    dispatch(action);
  };
  render(){
   let color = {
      background:this.props.header_color,
    }
    let corousel = this.props.corousel;
    let data = [];
    if(corousel!==null){
      corousel.map((key,index)=>{
          data.push(<Carousel.Item><img src={key.image} alt="First slide"/><Carousel.Caption><h3>{key.heading}</h3><p>{key.sub_heading}</p></Carousel.Caption></Carousel.Item>);
      });
    }
    let id_cur = this.props.match.params.prodId;
    let id = this.props.currentProduct?this.props.currentProduct.id:null;
    let image = this.props.currentProduct?this.props.currentProduct.image:null;
    let title = this.props.currentProduct?this.props.currentProduct.title:null;
    let price = this.props.currentProduct?this.props.currentProduct.price:null;
    return(
      <Fragment>
      <div className="container contained" style={color}>
        <Menu/>
      </div>
      <div className="row" style={{clear:'both'}}>
        <Carousel touch="true" style={{height:'400'}}>
           {data}
        </Carousel>
      </div>
      {image!==false && image!==null &&
        <div className="col-md-4">
            <ImageZoom
              portalId="portal"
              largeImgSrc={image}
              imageWidth={886}
              imageHeight={331}
              zoomContainerWidth={500}
              activeClass="my-active"
              zoomScale={3}
              responsive={true}
            >
              <img src={image} alt="Cat image" width="100%"/>
            </ImageZoom>
            </div>
           }
            <div className="col-md-8">
              <div id="portal"/>
              {title!==null && price!==null && id_cur===id&&
                <Cart proId={this.props.match.params.prodId} title={title} price={price} imageurl={image}/>
              }
            </div>


      </Fragment>
    )
  }
}
export default connect(mapStateToProps)(ProductList);
