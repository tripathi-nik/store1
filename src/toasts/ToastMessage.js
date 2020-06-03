import React, { useState,Fragment,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'react-bootstrap/Toast';
const Example = props => {
   const [showA, setShowA] = useState(props.state==='true'?true:false);
   const toggleShowA = () => setShowA(!showA);
   let classer = [];
   classer.push('fade');
   classer.push('toast');
   if(props.show==='show'&&showA==true){
      classer.push(props.show);
      setTimeout(() => {
        toggleShowA()
      }, 5000);
   }
   return (
   <Fragment>
   <div className={classer.join(" ")} role="alert" aria-live="assertive" aria-atomic="true">
     <div class="toast-header">
     <strong class="mr-auto">{props.message}</strong>
     <button type="button" className="close ml-2 mb-1" data-dismiss="toast" onClick={toggleShowA}>
       <span aria-hidden="true">×</span>
       <span class="sr-only">Close</span>
     </button>
    </div>
    </div>  
  </Fragment>
  );
}
export default Example;
