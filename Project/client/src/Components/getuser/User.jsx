import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./User.css"
import axios from "axios"
import toast from "react-hot-toast"
const User = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const responese = await axios.get("http://localhost:9000/api/getall")
            setUsers(responese.data);
        }
        fetchData();
    })
    const deleteUser = async (UserId)=>{
        await axios.delete(`http://localhost:9000/api/delete/${UserId}`)
        .then((responese)=>{
            setUsers((prevUser)=>prevUser.filter((user)=>user._id !== UserId))
            toast.success(responese.data.msg,{position:'top-right'});
        })
        .catch((error)=>{
            console.log(error);
            
        })
    }
    return (
        <div className="userTable">
            <Link to={'/add'} className="addButton">add user</Link>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr key={user._id}>
                                    <td>{index+1}</td>
                                    <td>{user.fname} {user.lname}</td>
                                    <td>{user.email}</td>
                                    <td className="actionButtons">
                                        <button onClick={()=>deleteUser(user._id)}><i className="fa-solid fa-trash"></i></button>
                                        <Link to={`/edit/`+user._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}
export default User