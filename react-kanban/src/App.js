import React, { useEffect, useState} from 'react';
import './App.css';
import Board from './Components/Board/Board';
import Dropdown from "./Components/Dropdown/Dropdown";

function App() {

  const [tickets,setTickets]=useState([]); 
  // const [users,setUsers]=useState([]);

  useEffect(()=>{
    fetch("https://apimocha.com/quicksell/data")
      .then((result)=>{result.json()
      .then((resp)=>{
        try {
          const ticketsArray = resp.tickets;
          // const usersArray = resp.users;
          setTickets(ticketsArray)
          // setUsers(usersArray)
        }catch (error) {
          console.error('Error fetching data:', error);
        }
      })
    })
  },[]) // blank array is passed so that it runs only once
  // console.warn(tickets)
  // console.warn(users)

const [target,setTarget]=useState({
  cid: "",
  bid:"",
});

// const handleDragEnd=()=>{

// }

  return (
    <div className="App">
      <div className='app_navbar'>
      < h2>Kanban Board</h2><br/>
      <Dropdown />
      </div>
      <div className='app_outer'>
        <div className='app_boards'>

          {/* {tickets.map((tickets)=>( */}
            <Board 
            tickets={tickets}
            // handleDragEnd={handleDragEnd}
            // handleDragEnter={handleDragEnter}
              />

             {/* ))}   */}

        </div>
      </div>
    </div>
  ); 
}

export default App;
