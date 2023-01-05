import React from "react"

export default function Card(props){
    return(
        <section className="cart--container">
            <img 
                src={`../images/${props.coverImg}`} 
                className="cart--img"
            />
            <div className="cart--info">
                <div className="cart--info--firstLine">
                    <img 
                        src="../images/map.png"
                        className="cart--info--map"
                    />
                    <span className="cart-country">{props.location}</span>
                    <a href={props.googleMapsUrl} className="cart--info--link">
                    View on Google Maps</a>
                </div>
                <span className="cart--info--place">{props.title}</span>
                <span className="cart--info--date">{props.startDate} - {props.endDate}</span>
                <span className="cart--info--text">
                {props.description}
                </span>
            </div>
            <div className="line"></div>
        </section>
    )
}