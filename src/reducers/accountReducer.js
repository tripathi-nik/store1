const data = {
  loading:null,
  status:null,
  message:null,
  userid:null

};
const eventReducer = (state=data,action) =>{
   switch(action.type) {
     case 'creating_account':
    const load = action.payload;
    const userID = load.userId?load.userId:null
     return{
       ...state,
       status:load.status,
       message:load.message,
       loading:null,
       userid:userID
     }
      break;
      case 'add_loader':
      return{
        ...state,
        loading:action.payload,
      }
       break;
      default:
      return state;
      break;
   }
}
export default eventReducer;
