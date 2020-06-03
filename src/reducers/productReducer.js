const data = {
  corousel:null,
  added:null,
  headerColor:'grey',
  currentProduct:null,
  addedToCart:null,
  carting:[],
  toastMessage:null,
  displayMessage:'false',
  lkey:0,
  setdelete:null,
};
const productReducer = (state=data,action) =>{
   switch(action.type) {
     case 'ProductDetail':
     return{
       ...state,
       corousel:action.payload.corousel,
       headerColor:action.payload.header_color!==null?action.payload.header_color:data.headerColor,
       currentProduct:action.payload.currentInfo,
       displayMessage:'false',
      }
      break;
      case 'Add_Loader':
      return{
        ...state,
        addedToCart:action.payload,
        toastMessage:null,
        displayMessage:'false',
        added:null
      }
      case 'addToCart':
      let carter = state.carting;
      let newCartItem = action.payload;
      const id = newCartItem.proId;
      let keyer = carter.findIndex(p=>{
          return p.proId === id
      });
      if(keyer>=0){
        let existingCartItem = {
          ...carter[keyer]
        }
        const existingQty = existingCartItem.qty;
        const newQty = parseInt(existingQty)+parseInt(newCartItem.qty);
        existingCartItem.qty = newQty;

        carter[keyer] = existingCartItem;
      }
      else{
        carter.push(action.payload);
      }
      return{
        ...state,
        carting:carter,
        addedToCart:null,
        added:'added',
      }
      break;
      case 'DisplayMessage':
      return{
        ...state,
        toastMessage:action.payload,
        displayMessage:'true',
      }
      break;
      case 'ChangeDelete':
      return{
        ...state,
        setdelete:action.payload,
      }
      case 'DeleteItem':
      let cart = data.carting;
      const currentKey = action.payload;
      const keyId = cart.findIndex(p=>{
          return p.proId === currentKey
      });
      cart.splice(keyId, 1) // remove element
      return{
        ...state,
        carting:cart,
        setdelete:'deleted',
      }
      break;
      default:
      return state;
      break;
   }
}
export default productReducer;
