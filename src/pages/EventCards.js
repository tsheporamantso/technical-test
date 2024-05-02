import React from 'react';
import PropTypes from 'prop-types';

const EventCards = ({
  img, date, title, venue,
}) => (
  <div className="flex flex-col border-2 rounded-md text-center p-1">
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
