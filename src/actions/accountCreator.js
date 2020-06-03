
export const accountCreater = (value)=>{
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(value),
  };
  return(dispatch)=>{
    fetch('http://localhost/reactApi/api/accountcreate.php',requestOptions)
    .then(res=>res.json())
    .then(res2=>{
       dispatch({type:'creating_account',payload:res2});
    })
    .catch(error => {
      console.error('Error:', error);
    })
  }
};
