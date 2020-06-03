const data = {
  defaultClass:'sidenav',
  header_menu:null,
  section_one:null,
  banner:null,
  productTabs:null,
  productList:null
};
const eventReducer = (state=data,action) =>{
   switch(action.type) {
     case 'Open_Menu':
     return{
       ...state,
       defaultClass:'sidenav openDev',
      }
      break;
      case 'Close_Menu':
      return{
        ...state,
        defaultClass:'sidenav',
       }
      break;
      case 'Header_Menu':
      return{
        ...state,
        header_menu:action.payload
      }
      break;
      case 'Section_One':
      return{
        ...state,
        section_one:action.payload,
        banner:action.payload.banner.bannerImage
      }
      break;
      case 'MenuTabs':
      return{
        ...state,
        productTabs:action.payload.tabs,
        productList:action.payload.prod
      }
      break;
      case 'List_Products':
      return{
        ...state,
        productList:action.payload
      }
      break;
      default:
      return state;
      break;
   }
}
export default eventReducer;
