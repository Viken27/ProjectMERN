import React, { useEffect, useState } from 'react';
import '../adduser/add.css';
import axios from"axios";
import toast from "react-hot-toast"
import { Link, useNavigate, useParams } from 'react-router-dom';
const Edit = ()=>{
    const users = {
        fanme:"",
        lname:"",
        email:""
    }   
    const {id} = useParams();
    const navigate = useNavigate();
    const [user,setUser]=useState(users);
    const inputChangeHandler=(e)=>{
        const {name,value}=e.target;
        setUser({...user,[name]:value});
        console.log(user);
        
    }
    useEffect(()=>{
        axios.get(`http://localhost:9000/api/getone/${id}`)
        .then((response)=>{
            setUser(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[id])

    const submitForm = async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:9000/api/update/${id}`,user)
        .then((response)=>{
            toast.success(response.data.msg,{position:"top-right"})
            navigate("/")
        }
        ).catch(error=> console.log(error))
    }
    return(
        <div className='addUser'>
            <Link to={"/"}>Back</Link>
            <h3>Update User</h3>
            <form className="addUserForm" onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" value={user.fname} onChange={inputChangeHandler} id="fname" name="fname" autoComplete="off" placeholder="First Name"></input>
                </div>
                <div className="inputGroup">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" value={user.lname} id="lname" onChange={inputChangeHandler} name="lname" autoComplete="off" placeholder="Last Name"></input>
                </div>
                <div className="inputGroup">
                    <label htmlFor="email">email</label>
                    <input type="text" value={user.email} id="email" onChange={inputChangeHandler} name="email" autoComplete="off" placeholder="email"></input>
                </div>
                {/* <div className="inputGroup">
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" name="password" autoComplete="off" placeholder="password"></input>
                </div> */}
                <div className="inputGroup">
                    <button type="submit">Update User</button>
                </div>
            </form>
        </div>
    )
}
export default Edit