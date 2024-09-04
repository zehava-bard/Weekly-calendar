import ContextMenu from "./ContextMenu";
import CMdelete_update from "./CMdelete_update";
import { useEffect } from "react";
import './CaleSty.css';
import moment from 'moment';

const Day = ({ date, listOfEvent, goToToday, setfuncGet,newEvent}) => {


    useEffect(() => {
        console.log("listOfEvent", listOfEvent)
        console.log("today", date);
    }, [])

    const componentToSetMenu = () => {
        return (<div style={{ display: 'inline-block' }}>
            <div className='day' style={{ borderStyle: 'groove' }}>
                <h2 style={{ textAlign: 'center' }}>{date.format('DD/MM/YYYY') + '  ' + date.format('dddd MMM, D')}</h2>
                {listOfEvent.map((event) =>
                    <CMdelete_update event={event} setfuncGet={setfuncGet}></CMdelete_update>
                )}
            </div>

        </div>)
    }




    return (<div>
        <ContextMenu contextComponent={componentToSetMenu} goToToday={goToToday} newEvent={newEvent} dpik={new moment(date).format("YYYY-MM-DD")}></ContextMenu>
    </div>)


}

export default Day;
