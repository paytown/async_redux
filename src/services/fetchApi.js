export const fetchApi = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';

      return json;
    })
    .then(json => json.map(character => ({
      id: character._id,
      name: character.name,
      photoUrl: character.photoUrl
    })));
};

export const getCharacter = id => {
  console.log('fetchAPI id', id);
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';

      return json;
    })
    .then(character => ({
      id: character._id,
      name: character.name,
      photoUrl: character.photoUrl,
      affiliation: character.affiliation
    }));
};
