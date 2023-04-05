
async function adduser(event){
    event.preventDefault();
   const name = event.target.name.value;
   const description = event.target.description.value;
   const price = event.target.price.value;
   const quantity = event.target.quantity.value;

   const obj = {
       name,
       description,
       price,
       quantity
   }
   axios.post('http://localhost:5001/add-data')
   .then((res)=>{
   console.log(res.data.newuser)
   showUserOnScreen(res.data.newuser)
   })
   .catch((err)=>{
     console.log(err)
   })
   };
   // Show user on screen
    function showUserOnScreen(data){
     console.log("name "+data.name)
     document.getElementById("for-name").value = "";
     document.getElementById("for-description").value = "";
     document.getElementById("for-price").value = "";
     document.getElementById("for-quantity").value = "";
     
     const parentNode=document.getElementById("list-of-user");
     const childHTML= `<li id="${data.id}">Name:-${data.name}-Description:-${data.description}-Price:-${data.price}-Quantity:-${data.quantity}
     <button onclick=decrease1('${data.quantity}','${data.id}')>buy1</button>
     <button onclick=decrease2('${data.quantity}','${data.id}')>buy2</button>
     <button onclick=decrease3('${data.quantity}','${data.id}')>buy3</button></li>`;
     parentNode.innerHTML= parentNode.innerHTML+childHTML;
   };
   
  //  Display User from the server
   window.addEventListener('DOMContentLoaded',()=>{
     axios.get('http://localhost:5001/get-data').then((res)=>{
       for(let i=0;i<res.data.alluser.length;i++){
         showUserOnScreen(res.data.alluser[i])
       }
     }).catch((err)=>{
       console.log(err)
     })
   });



  function decrease1(qty,id){
    axios.put(`http://localhost:5001/edit-data1/${id}`)
     
    .then((Res)=>{
     console.log(Res);
   }).catch((err)=>{
     document.body.innerHTML= document.body.innerHTML+"somthing went wrong";
     console.log(err);
   })
 };
   


  
  function decrease2(qty,id){
    axios.put(`http://localhost:5001/edit-data2/${id}`)
     
    .then((Res)=>{
     console.log(Res);
   }).catch((err)=>{
     document.body.innerHTML= document.body.innerHTML+"somthing went wrong";
     console.log(err);
   })
  }


  function decrease3(qty,id){
    axios.put(`http://localhost:5001/edit-data3/${id}`)
     
    .then((Res)=>{
     console.log(Res);
   }).catch((err)=>{
     document.body.innerHTML= document.body.innerHTML+"somthing went wrong";
     console.log(err);
   })
  }
