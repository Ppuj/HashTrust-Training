import React, { useState } from 'react'
import './ReminderApp.css'

const RemainderApp = () => {
    const [title, settitle] = useState('')
    const [date, setdate] = useState('')
    const [time, settime] = useState('')
    const [arr, setarr] = useState([])
    const [editindex,seteditindex]=useState(null)
    const [filter,setfilter]=useState('All')
    const currentDate = new Date().toISOString().split('T')[0];
    const upcomingReminders = arr.filter(item => item.date >= currentDate);
    const pastReminders = arr.filter(item => item.date < currentDate);
    function handleSubmit(e) {
        e.preventDefault()
        if (!title || !date || !time) {
            alert('Fill all the data')
        } else {
            if(editindex!==null){
                 const neweditarr=[...arr]
                 neweditarr[editindex]={title,date,time}
                 setarr(neweditarr)
                 seteditindex(null)
            }else{
            setarr([...arr, { title, date, time }])}
            settitle('')
            setdate('')
            settime('')
        }
    }
    function handleDelete(index){
        const newarr=arr.filter((_,i)=>i!==index)
        setarr(newarr)
    }
    function handleEdit(index){
        const editarr=arr[index]
        settitle(editarr.title)
        setdate(editarr.date)
        settime(editarr.time)
        seteditindex(index)
    }
    function handleReminder(value){
       setfilter(value)
    }
    const filteredReminders =  filter === 'All'? arr : filter === 'upcoming'? upcomingReminders : pastReminders;

    return (
        <div className='containerStyle'>
            <div className='formContainerStyle'>
                <h1>Remainder App</h1>
                <form onSubmit={handleSubmit} style={{marginBottom:'23px'}}>
                    <div className='inputGroupStyle'>
                        <div className='inputWrapperStyle'><label/>Title<input className='inputStyle' type='text' value={title} onChange={(e) => settitle(e.target.value)} /></div>
                        <div className='inputWrapperStyle'><label/>Date<input className='inputStyle' type='date' value={date} onChange={(e) => setdate(e.target.value)} /></div>
                        <div className='inputWrapperStyle'><label />Time<input className='inputStyle' type='time' value={time} onChange={(e) => settime(e.target.value)} /></div>
                        <button className='buttonStyle'>{editindex!==null?'Update':'Add'}</button>
                    </div>
                </form>
                
                {/* -------------------------------------------Reminder data---------------------------- */}
                <button className='deleteButtonStyle' onClick={()=>handleReminder('All')}>All Remainders</button>
                <button className='deleteButtonStyle' onClick={()=>handleReminder('upcoming')}>Upcoming Reminders</button>
                <button className='deleteButtonStyle' onClick={()=>handleReminder('Past')}>Past Reminders</button>
                {filteredReminders&&<div className='todoContainerStyle'>
                    <h3>{filter === 'All'? 'All Reminders' : filter === 'upcoming'? 'Upcoming Reminders' : 'Past Reminders'}</h3>
                    {filteredReminders.map((item, index) => <div key={index} className='itemStyle'>
                        <p><strong>Title:</strong> {item.title}</p>
                        <p><strong>Date:</strong> {item.date}</p>
                        <p><strong>Time:</strong> {item.time}</p>
                        <div className='buttonGroupStyle'>
                            <button className='editButtonStyle' onClick={()=>handleEdit(index)}>Edit</button>
                            <button className='deleteButtonStyle' onClick={()=>handleDelete(index)}>Delete</button>
                        </div>
                    </div>)}
                </div>}
            </div>
        </div>
    )
}

export default RemainderApp
