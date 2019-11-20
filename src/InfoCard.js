import React from "react";

const InfoCard = props => {
    return (
        <div className='card-container'>
            <div className="detail date"><p>{props.date}</p></div>
            <div className='title'>
                <h2>{props.title}</h2>
            </div>    
            <img src={props.image} style={{maxWidth: 900}}/>
        </div>
    )
}

export default InfoCard;