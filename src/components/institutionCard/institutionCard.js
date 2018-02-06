import React from 'react';
import { Link } from 'react-router-dom';
import './institutionCard.css';

const institutionCard = ({institutionModel}) => {
  return (
    <div className="institution__card">
      <div className="institution__card__wrapper">
        <Link className="institution__card__title" to={`/institutions/${institutionModel.id}`}>{institutionModel.name}</Link>
      </div>
    </div>
  )
};

export default institutionCard;
