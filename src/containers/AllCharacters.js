import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getCharacters,
  getCharactersLoading,
  getCharactersErr
} from '../selectors/characterSelectors';
import Characters from '../components/characters/Characters';
import { fetchCharacters } from '../actions/fetchCharactersAction';

class AllCharacters extends PureComponent{
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    characters: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    err: PropTypes.object
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { characters, loading, err } = this.props;
    if(loading) return <h1>Loading...</h1>;
    if(err) return <h1>Error...</h1>;
    return <Characters characters={characters} />;
  }
}

const mapStateToProps = state => ({
  characters: getCharacters(state),
  loading: getCharactersLoading(state),
  err: getCharactersErr(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);
