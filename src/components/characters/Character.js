import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  return (
    <div>
      <img src={character.photoUrl} />
      <p>{character.name} hi</p>
    </div>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;
