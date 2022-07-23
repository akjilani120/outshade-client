import React, { useState } from 'react';

const UserMake = (user) => {
    const [users , setUsers] = useState("")
  console.log("user" , user)
  
  if(user){
    const name = user?.user?.displayName
    const photo = user?.user?.photoURL
    console.log(name  , photo , "ajim taka")
    const email = user?.user?.email
    const userData ={
        name ,
        photo
    }
   
        const url =`http://localhost:5000/user/${email}`
        fetch(url , {
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body : JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setUsers(data)
        })
    
  }
 
 
    return [users]
};

export default UserMake;