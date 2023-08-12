import React, { useState } from "react";
import{MoreHorizontal} from "react-feather";
import "./Card.css";

function Card(){
    return(
        <div className="card">
            <div className="card_top">
               <p className="card_top_title">CM</p> 
            </div>
            <div className="card_title">
                gwnihf
            </div>
            <div className="card_footer">
                <MoreHorizontal />
                <div className="card_footer_feature">
                    hiuhjok
                </div>
            </div>
        </div>
    )
}

export default Card