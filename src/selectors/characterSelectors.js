export const getCharactersState = state => state.characters;
export const getCharacters = state => getCharactersState(state).characters;
export const getCharactersLoading = state => getCharactersState(state).loading;
export const getCharactersErr = state => getCharactersState(state).err;
