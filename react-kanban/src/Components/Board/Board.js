import React, { useState } from "react";
import{Plus, MoreHorizontal} from "react-feather";

import "./Board.css";
import Card from "../Card/Card";


const Board = ({ tickets, props }) => {
    const todoTickets = tickets.filter((ticket) => ticket.status === 'Todo');
    const inProgressTickets = tickets.filter((ticket) => ticket.status === 'In progress');
    const backlogTickets = tickets.filter((ticket) => ticket.status === 'Backlog');
    const completedTickets = tickets.filter((ticket) => ticket.status === 'Completed');
    
    return (
      <div className="board">

        {/* for todo board */}
        <div className="todo_board">

        <div className="board_top">
            <h3 className="board_top_title">To Do<span>2</span></h3>
            <div className="board_top_title_icon">
                <Plus />
                <MoreHorizontal />
            </div>
        </div>

        <div className="board_cards">

        {todoTickets.map((ticket) => (
            <Card 
            key={ticket.id} 
            card={ticket}
            // handleDragEnd={props.handleDragEnd}
            // handleDragEnter={props.handleDragEnter}
            />   
        ))}
        
        </div>
        </div>

        {/* for in progress board */}
        <div className="inprogress_board">

        <div className="board_top">
            <h3 className="board_top_title">In Progress<span>2</span></h3>
            <div className="board_top_title_icon">
                <Plus />
                <MoreHorizontal />
            </div>
        </div>

        <div className="board_cards">

        {inProgressTickets.map((ticket) => (

          <div key={ticket.id} className="list">
            <Card card={ticket} /> {/* Pass the entire ticket as a card */}
          </div>          
        ))}
        
        </div>
        </div>

        {/* for completed board */}
        <div className="completed_board">

        <div className="board_top">
            <h3 className="board_top_title">Completed<span>2</span></h3>
            <div className="board_top_title_icon">
                <Plus />
                <MoreHorizontal />
            </div>
        </div>

        <div className="board_cards">

        {completedTickets.map((ticket) => (
            <Card key={ticket.id} card={ticket} />   
        ))}
        
        </div>
        </div>


        {/* for backlog board */}
        <div className="backlog_board">

        <div className="board_top">
            <h3 className="board_top_title">Backlog<span>2</span></h3>
            <div className="board_top_title_icon">
                <Plus />
                <MoreHorizontal />
            </div>
        </div>

        <div className="board_cards">

        {backlogTickets.map((ticket) => (

          <div key={ticket.id} className="list">
            <Card card={ticket} /> {/* Pass the entire ticket as a card */}
          </div>          
        ))}
        
        </div>
        </div>

      </div>
    );
  };

export default Board