const apiKEY = "qcD3UeTGL9tMu60M3mhkm4ylYyjFlPRL";

const getGifs = ({ keyword = "morty" } = {}) => {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const { images, title, id } = image;
        const { url } = images.downsized_medium;
        return { images, title, id, url };
      });
      return gifs;
    });
};

export default getGifs;
