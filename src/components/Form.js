import React, { useState, useEffect } from 'react'
import List from './List'
import { useDispatch ,useSelector} from 'react-redux'
import { Submitdata,Deletedata ,Editdata} from '../Action/Index'

const Form = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [Dob, setDob] = useState('')
    const [gender, setgender] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    const [education, setEducation] = useState('');
    const [password, setpassword] = useState('')
    const [confpassword, setconfpassword] = useState('')
    const [error, seterror] = useState({})
    // const [arr, setarr] = useState([])
    const [editIndex, setEditIndex] = useState(null);
    const array=useSelector((state)=>state.FormData.formarr||[])
    const dispatch=useDispatch()
    // useEffect(() => {
    //     console.log(arr);
    // }, [arr]);

    function validation() {
        const newError = {}
        if (!name.trim()) {
            newError.name = 'Name is Required'
        } else if (name.trim().length < 2) {
            newError.name = 'Name must be 2 character '
        }
        if (!email.trim()) newError.email = 'Email is Required'
        if (!Dob) newError.Dob = 'Date of birth is Required'
        if (!profilePic) newError.profilePic = 'Profile pic is Required'
        if (!gender) newError.gender = 'Gender is Required'
        if (!education || education === 'Select') newError.education = 'Education is Required'
        if (!password) {
            newError.password = 'password is Required'
        } else if (!password.length > 6 || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
            newError.password = 'Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"'
        }

        if (!confpassword) {
            newError.confpassword = 'confpasword required'
        } else if (password !== confpassword) {
            newError.confpassword = 'password should same'
        }
        seterror(newError)
        return Object.keys(newError).length === 0;
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (validation()) {

            // if(editIndex!==null){
            //  const newarr=[...arr]
            //  newarr[editIndex]= { name, email, Dob, gender, profilePic: profilePic ? profilePic.name?profilePic.name:profilePic: null, education, password, confpassword }
            //  setarr(newarr)
            //  setEditIndex(null)
            // }else{
            // setarr([...arr, { name, email, Dob, gender, profilePic: profilePic ? profilePic.name : null, education, password, confpassword }])
            // }

            // ----------reduxcode----------
            const formdata={name,email,Dob,gender,profilePic:profilePic?profilePic.name:null,education,password,confpassword}
            if(editIndex!==null){
              dispatch(Editdata(editIndex,formdata))
              setEditIndex(null)
            }else{
            dispatch(Submitdata(formdata))}
           resetForm()
        }
    }
    function handleEdit(index) {
        const selectedData = array[index];
        setname(selectedData.name);
        setemail(selectedData.email);
        setDob(selectedData.Dob);
        setgender(selectedData.gender);
        setProfilePic(selectedData.profilePic)
        setEducation(selectedData.education);
        setpassword(selectedData.password);
        setconfpassword(selectedData.password);
        setEditIndex(index);
      }
    function resetForm(){
        setname(' ')
        setemail(' ')
        setDob('')
        setgender(' ')
        setProfilePic(null)
        setEducation(' ')
        setpassword('')
        setconfpassword('')
        document.getElementById('profilePicInput').value = '';
    }
    // function handleDelete(index) {
    //     const updatedArr = arr.filter((_, i) => i !== index);
    //     setarr(updatedArr);
    //   }
      function handleDelete(index){
        dispatch(Deletedata(index))
      }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div><label>Name:</label><input type='text' value={name} onChange={(e) => setname(e.target.value)} />{error.name && <p style={{ color: 'red' }}>{error.name}</p>}</div>
                <div><label>Email:</label><input type='email' value={email} onChange={(e) => setemail(e.target.value)} />{error.email && <p style={{ color: 'red' }}>{error.email}</p>}</div>
                <div><label>Date of Birth:</label><input type='date' value={Dob} onChange={(e) => setDob(e.target.value)} />{error.Dob && <p style={{ color: 'red' }}>{error.Dob}</p>}</div>
                <div>Gender:<label><input type='radio' name='gender' value='male' checked={gender === 'male'} onChange={(e) => setgender(e.target.value)} />Male</label>
                    <label><input type='radio' name='gender' value='female' checked={gender === 'female'} onChange={(e) => setgender(e.target.value)} />Female</label>{error.gender && <p style={{ color: 'red' }}>{error.gender}</p>}</div>
                <div><label>Profile pic:</label><input type='file' id='profilePicInput' onChange={(e) => { setProfilePic(e.target.files[0]) }} />{error.profilePic && <p style={{ color: 'red' }}>{error.profilePic}</p>}</div>
                <div>Level of Education:
                    <select value={education} onChange={(e) => setEducation(e.target.value)}>
                        <option value='Select'>Select</option>
                        <option value='High School'>High School</option>
                        <option value='Bachelor'> Bachelors</option>
                        <option value='Post Graduate'>Post Graduate</option>
                    </select>{error.education && <p style={{ color: 'red' }}>{error.education}</p>}
                </div>
                <div><label>Password:</label><input type='password' value={password} onChange={(e) => setpassword(e.target.value)} />{error.password && <p style={{ color: 'red' }}>{error.password}</p>}</div>
                <div><label>confirm Password:</label><input type='password' value={confpassword} onChange={(e) => setconfpassword(e.target.value)} />{error.confpassword && <p style={{ color: 'red' }}>{error.confpassword}</p>}</div>
                <button> {editIndex !== null ? "Update" : "Submit"}</button>
            </form>
            {/* <List array={arr} handleDelete={handleDelete}  handleEdit={handleEdit}/> */}
            <List array={array} handleDelete={handleDelete} handleEdit={handleEdit}/>
        </>
    )
}

export default Form
