import React from 'react'
import { useSelector } from 'react-redux'

const List = () => {
    const array=useSelector((state)=>state.FormData.formarr||[])
    return <>
        <table style={{width:'100%',marginTop:'20px',textAlign:'left'}}>
            {array.length > 0 && <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Dob</th>
                    <th>Gender</th>
                    <th>Profilepic</th>
                    <th>Education</th>
                    <th>Password</th>
                    <th>confirmPassword</th>
                    {/* <th>Actons</th> */}
                </tr>
            </thead>}
            <tbody>
                {array.map((item, index) => <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.Dob}</td>
                    <td>{item.gender}</td>
                    <td>{item.profilePic}</td>
                    <td>{item.education}</td>
                    <td>{item.password}</td>
                    <td>{item.confpassword}</td>
                    <td>
                        {/* <button onClick={()=>handleEdit(index)}>Edit</button>
                        <button onClick={()=>handleDelete(index)}>Delete</button> */}
                    </td>
                </tr>)}
            </tbody>
        </table>
    </>
}

export default List
