import React, { useState, useEffect } from "react"
import moment from "moment/moment";
import Day from "./Day";
import AddEvent from "./Event";
import { useNavigate,Link, useParams } from 'react-router-dom';
import {getEvent} from './axios/eventApi';
import './CaleSty.css';
import { Event } from "./classes/ClassEvents";


const CalenderWeekly = () => {

  const today = moment();
  const [startWeek, setStartWeek] = useState(today.startOf('week'));
  const [listOfEvent, setlistOfEvent] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setfuncGet()
  }, [])

  const setfuncGet = () => {
    getEvent(localStorage.getItem('UserID')).then(response => {
      console.log("response in login", response.data.value);
      setlistOfEvent(response.data.value)
    })
  }
  const go_to_today = () => {
    setStartWeek({ ...today })
  }

  const new_event = (event) => {  
    // navigate("/NewEvent", { replace: false });
    console.log(event);
    navigate("/EditEvent",{state:{event}},{ replace: false });

  }

  const search_event = () => {

  }
  
  const prev_d = () => {
    let prevweek = new moment(startWeek).day(-7);
    setStartWeek({ ...prevweek })
  }

  const next_d = () => {
    let nextweek = new moment(startWeek).day(7);
    setStartWeek({ ...nextweek })
  }
  return (<>
  <div className="title">
    <div className="button"><button onClick={go_to_today}>go to today</button>
    <button onClick={()=>{const e=new Event();new_event(e)}}>new event</button>
    <button onClick={search_event}>search event</button>
    <button onClick={prev_d}>«</button>
    <button onClick={next_d}>»</button></div></div>
    <br></br>

    <div style={{ display: "flex" }}>
      {new Array(7).fill('').map((d, index) =>
      //try
        <Day goToToday={go_to_today}newEvent={new_event} setfuncGet={setfuncGet}date={ moment(startWeek).day(index, 'd')} listOfEvent={listOfEvent.filter(item=>moment(item.startDate).format()===moment(startWeek).day(index, 'd').format())} />)}
    </div>
    
  </>)
}
export default CalenderWeekly
