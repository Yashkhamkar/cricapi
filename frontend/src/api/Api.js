export const getMatches = () => {
  const url = `https://api.cricapi.com/v1/series?apikey=505dbe8b-810a-4247-9c5d-4cdc01926f1f`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });
};
