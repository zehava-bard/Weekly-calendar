import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { postEvent } from './axios/eventApi';
import { Event } from './classes/ClassEvents';
import { v4 as uuidv4 } from 'uuid';
import './NewEvent.css';
import moment from 'moment';
import { TextField } from '@mui/material';

const EditEvent = () => {
  // const { datepicker, event } = useParams();
  const location = useLocation();
  console.log("event2", location);
  debugger
  const [title, settitle] = useState(!location.state?.event?.title ? '' : location.state.event.title)
  const [description, setdescription] = useState(!location.state?.event?.description ? '' : location.state.event.description)
  const [startDate, setStartDate] = useState(!location.state?.event?.startDate ? new moment().format("YYYY-MM-DD") : moment(location.state.event.startDate).format("YYYY-MM-DD"))
  console.log(location.state.event.startDate);
  const navigate = useNavigate();
  // const [theDate,settheDate]=useState(datepicker?moment(datepicker).format("YYYY-MM-DD"):new Date())
  const [id, setID] = useState(!location.state?.event?.eventId ? uuidv4().toString() : location.state.event.eventId)
  // const [selectedDate, setSelectedDate] = useState(new Date());
  // const [selectedDate, handleDateChange] = React.useState(new Date());
  //const [theDate,settheDate]=React.useState(datepicker);

  const save_event = async () => {
    const newEvent = new Event()
    newEvent.eventId = id
    console.log(newEvent.eventId)
    newEvent.userId = localStorage.getItem('UserID')
    newEvent.title = title
    newEvent.description = description
    newEvent.startDate = startDate
    newEvent.endDate = startDate
    if (newEvent.startDate !== "" && newEvent.title !== "") {
      postEvent(newEvent).then(response => {
        console.log("response in login", response);
        if (response.data.statusCode === 200) {
          navigate("../CalenderWeekly", { replace: false });
        }
        else {
          alert("somthing wrong...😒")
        }
      })
    }
    else { alert("insert details") }
  }

  const cancel = async () => {
    navigate("../CalenderWeekly", { replace: false });
  }


  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      {console.log("ddddddddddddddddd")}
      {console.log(startDate)}
      <br></br>
      <br></br>
      {/* <h3>eventId {JSON.stringify(event,null,3)}</h3> */}
      {/* <h3>datepicker {datepicker}</h3>  */}
      <div className='title'><h2>new event</h2></div>
      <div className='celander'><div className='con'>
        <input defaultValue={title} type="text" required placeholder='insert title of event' onBlur={(e) => settitle(e.target.value)} />
        <br></br>
        <br></br>
        <textarea defaultValue={description} style={{ height: "200px", width: "300px", textAlign: "center", textAnchor: "start" }} type="text" placeholder="הכנס תאור האירוע" required onBlur={(e) => setdescription(e.target.value)} />
        <br></br>
        <br></br>
        {/* <TextField type={Date} defaultValue={startDate} onChange={(d) => setStartDate(d)} InputLabelProps={{
           shrink: true,
        }} /> */}
        <DatePicker
        value={moment(startDate)}
      selected={startDate}
      onChange={(d) => setStartDate(d)}
      dateFormat="YYYY-MM-DD"
      // placeholderText="date"
    />
        {/* <TextField
      type="date"
      value={startDate}
      onChange={(d) => setStartDate(d)}
      InputLabelProps={{
        shrink: true,
      }}
    /> */}
        <br></br>
        <br></br>
        <button onClick={save_event}> save</button>
        <button onClick={cancel}> cancel</button></div></div>
    </LocalizationProvider>
  );
}
export default EditEvent
