export const productDetail = (name)=>{
  return(dispatch)=>{
    fetch('http://localhost/reactApi/api/productDetail.php?menu='+name)
    .then(res=>res.json())
    .then(res2=>{
      dispatch({type:'ProductDetail',payload:res2});
    });
  }
};
export const productDetail2 = (name)=>{
  return(dispatch)=>{
    fetch('http://localhost/reactApi/api/productParams.php?menu='+name)
    .then(res=>res.json())
    .then(res2=>{
      dispatch({type:'ProductParams',payload:res2});
    });
  }
};

export const deleteCartItem = (name)=>{
  return(dispatch)=>{
      dispatch({type:'ProductParams',payload:name});
  }
};
