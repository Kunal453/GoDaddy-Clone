// import React, { useEffect, useState } from "react"
// import axios from "axios"
// import { Link, useNavigate } from "react-router-dom"


// function Register() {
//     const navigate=useNavigate();

//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')

//     async function submit(e){
//         e.preventDefault();

//         try{

//             await axios.post("http://localhost:2000/Register",{
//                 email,password
//             })
//             .then(res=>{
//                 if(res.data=="exist"){
//                     alert("User already exists")
//                 }
//                 else if(res.data=="notexist"){
//                     navigate("/home",{state:{id:email}})
//                 }
//             })
//             .catch(e=>{
//                 alert("register Successfully")
//                 console.log(e);
//             })

//         }
//         catch(e){
//             console.log(e);

//         }

//     }


//     return (
//         <div className="Reg">

//             <h1>Register</h1>

//             <form action="POST">
//                 <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
//                 <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
//                 <input type="submit" onClick={submit} />

//             </form>

//             <br />
//             <p>OR</p>
//             <br />

//             <Link to="/Login">Login Page</Link>

//         </div>
//     )
// }

// export default Register