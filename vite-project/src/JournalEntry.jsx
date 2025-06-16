import React from 'react';

export default function JournalEntry(props) {
  return (
    <div className="journal-entry">
      <img src={props.imageUrl} alt={props.title} className="journal-image" />
      <div className="journal-details">
        <h2>{props.title}</h2>
        <p><strong>Location:</strong> {props.location}</p>
        <p><strong>Dates:</strong> {props.startDate} - {props.endDate}</p>
        <p>{props.description}</p>
        <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
      </div>
    </div>
  );
}
