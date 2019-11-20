import React from "react";

const InfoCard = props => {
    return (
        <div className='card-container' style={{width: 900, margin: `${0} auto`}}>
            <div className='header'>
                <div>
                    <h2 className='title'>{props.title}</h2>
                </div>
                <div className="detail date">
                    <p className='date'>{props.date}</p>
                </div>
            </div>    
            <div className='image-container'>
                <img className="nasaphoto" src={props.image} style={{maxWidth: 900}}/>
            </div>
            <div className='info-container'>
                <p style={{textAlign: 'left'}}>{props.explanation}</p>
            </div>
        </div>
    )
}

export default InfoCard;