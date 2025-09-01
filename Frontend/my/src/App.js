import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate =useNavigate()
const[user,setUser] = useState("")
const[pass,setPass] = useState("")

const handleUser= (e)=>
  setUser(e.target.value)

const handlePass= (e)=>
  setPass(e.target.value)
function check()
  {
    var logindetails = axios.get(`http://localhost:5000/login?username=${user}&password=${pass}`);
    logindetails.then(function(data){
      if (data.data===true){
          navigate("./success")
        }
        else{
          return alert("Login Failed..try again")
        }
    })
  }

  return (

 <div className="bg-gray-900 flex flex-col items-center justify-center min-h-screen">
  <div className="bg-slate-100 p-8 rounded-md w-full max-w-sm">
  <h1 className="text-4xl font-bold mb-6 text-center" >welcome!!</h1>
  <input className=" border rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-5" onChange={handleUser} name="username" placeholder="username" ></input>
  <input  className=" border rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-5" onChange={handlePass} name="password" placeholder="password"/>
  <button className="bg-blue-600 justify-center text-white hover:bg-blue-700 px-4 mb-5 rounded w-full py-2" onClick={check}>LOG IN</button>
  <h3 className="text-bold text-center text-xl" >Do you haven't account? Register</h3>
  </div>
 </div>
  );
}

export default App;
