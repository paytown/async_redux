import React from 'react';
import PropTypes from 'prop-types';

function CharacterDetails({ character }) {
  const {
    name,
    photoUrl,
    affiliation
  } = character;

  return (
    <div>
      <h1>{name}</h1>
      <img src={photoUrl} />
      <p>{affiliation}</p>
    </div>
  );
}

CharacterDetails.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterDetails;
