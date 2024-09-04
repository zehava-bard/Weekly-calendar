import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { deleteEvent } from './axios/eventApi';
import { useNavigate } from 'react-router-dom';

function CMdelete_update({event, setfuncGet,newEventfunc}) {
  const [contextMenu, setContextMenu] = React.useState(null);
  const navigate = useNavigate();


  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
          mouseX: event.clientX + 2,
          mouseY: event.clientY - 6,
        }
        :
        null,
    );
  };

  const handleClose = (mess) => {
    setContextMenu(null);
    mess === "delete" ? delete_event() : update_event()
  };
  const delete_event = async () => {
    deleteEvent(event.eventId).then(response => {
      response.data.statusCode === 200 ? setfuncGet() : alert("somthing wrong...😒")
    })
  }

  const update_event = async () => {
    console.log("event", event);
    // newEventfunc(event)
    navigate("/EditEvent", {state:{event}}, { replace: false });
  }

  // const ContextComponent = props.contextComponent;

  return (
    <div onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }}>
                 <div style={{ borderStyle: 'groove', width: '195px', height: '40px', borderRadius:10}}>
                {event.title + " : " +event.description}
          </div>
        
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={() => handleClose("delete")}>delete</MenuItem>
        <MenuItem onClick={() => handleClose("update")}>edit</MenuItem>

      </Menu>
    </div>
  );
}

export default CMdelete_update;