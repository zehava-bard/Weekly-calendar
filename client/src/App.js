import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CalenderWeekly from "./CalenderWeekly";
import Login from "./Login"
import Event from './Event';
import Register from './Register'
import EditEvent from './EditEvent';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/CalenderWeekly" element={<CalenderWeekly />} />
      {/* <Route path="/Event/:date" component={<Event/> }/> */}
      <Route path="/NewEvent" element={<Event />} />
      <Route path='/EditEvent' element={<EditEvent/>}/>
      <Route path="/Register" element={<Register />} />

    </ Routes>
  </BrowserRouter>
);


export default App;
