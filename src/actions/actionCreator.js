export const creater = (name)=>{
  return(dispatch)=>{
    fetch('http://localhost/reactApi/api/menu.php?menu='+name)
    .then(res=>res.json())
    .then(res2=>{
      dispatch({type:'Header_Menu',payload:res2});
    });

  }
};
export const creater2 = ()=>{
  return(dispatch)=>{
    fetch('http://localhost/reactApi/api/front-page.php')
    .then(res=>res.json())
    .then(res2=>{
      dispatch({type:'Section_One',payload:res2});
    });

  }
};
export const creater3 = ()=>{
  return(dispatch)=>{
    fetch('http://localhost/reactApi/api/product.php')
    .then(res=>res.json())
    .then(res2=>{
      dispatch({type:'MenuTabs',payload:res2});
    });

  }
};
export const productList = (value)=>{
  return(dispatch)=>{
    fetch('http://localhost/reactApi/api/productList.php?data=list&cat='+value)
    .then(res=>res.json())
    .then(res2=>{
      dispatch({type:'List_Products',payload:res2});
    });

  }
};
