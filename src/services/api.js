const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/').then((response) =>
    response.json().then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          species: character.species,
          speciesType: character.type,
          planet: character.origin.name,
          episodes: character.episode.length,
          status: character.status,
          gender: character.gender,
        };
      });
    })
  );
};

export default getDataFromApi;
