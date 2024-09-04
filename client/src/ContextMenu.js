import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddEvent from './Event';
import { Event } from './classes/ClassEvents';

function ContextMenu(props) {
  const [contextMenu, setContextMenu] = React.useState(null);

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
    console.log(props);
    const e = new Event()
    e.startDate=props.dpik
    mess==="goToToday"?props.goToToday():props.newEvent(e)
  };

  const ContextComponent = props.contextComponent;

  return (
    <div onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }}>
      <ContextComponent></ContextComponent>
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
        <MenuItem onClick={()=>handleClose("new event")}>New Event</MenuItem>
        <MenuItem onClick={()=>handleClose("goToToday")}>Go to today</MenuItem>

      </Menu>
    </div>
  );
}
export default  ContextMenu;