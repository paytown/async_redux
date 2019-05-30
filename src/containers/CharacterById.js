import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CharacterDetails from '../components/characters/CaracterDetails';
import { getCharacter, getCharacterLoading } from '../selectors/characterDetailSelectors';
import { fetchCharacter } from '../actions/characterDetailAction';

class CharacterById extends PureComponent {
  static propTypes = {
    character: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { character, loading } = this.props;

    if(loading) return <h1>Loading...</h1>;
    
    return <CharacterDetails character={character} />;
  }
}

const mapStateToProps = state => ({
  character: getCharacter(state),
  loading: getCharacterLoading(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchCharacter(props.match.params.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterById);
