import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`${props.coverImg}`} className="card--image" alt="" />
      <p className="location">
        <FaLocationArrow className="icon--earth" />
        {props.location}
      </p>
      <a className="map--links" href={props.googleMapsUrl}>
        View on Google Maps
      </a>

      <p className="card--title">{props.title}</p>
      <span className="dateStart">{props.startDate}<FaArrowRight className="icon--aarow" /></span>
      <span className="dateEnd">{props.endDate}</span>
      <p className='card--description'>{props.description}</p>
    </div>
  );
}
