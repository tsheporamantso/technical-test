import React from 'react';
import PropTypes from 'prop-types';

const EventCards = ({
  img, date, title, venue,
}) => (
  <div className="flex flex-col border-1 rounded-md p-1 m-10 w-1/2 h-1/2">
    <img src={img} alt="" />
    <small className="text-slate-400 font-thin">{date}</small>
    <h2 className="font-medium">{title}</h2>
    <p className="text-slate-600 text-sm font-extralight">{venue}</p>
  </div>
);

EventCards.propTypes = {
  img: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  venue: PropTypes.string.isRequired,
};

export default EventCards;
