import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Character({ character }) {
  return (
    <div>
      <Link to={`/${character.id}`}>
        <img src={character.photoUrl} />
        <p>{character.name}</p>
      </Link>
    </div>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;
