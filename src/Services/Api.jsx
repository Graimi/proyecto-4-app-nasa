// Creamos la función base para llamar a las apis
async function Api(url, shouldIncludePhotosProp = false) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return shouldIncludePhotosProp ? data?.photos : data;
  } catch (error) {
    return error;
  }
}

// A continuación almacenamos aquí todas las direcciones URL para llamar a las apis

// Almacenamos en una constante la URL de la NASA dedicada a Astronomical
export const astronomicalUrl = 'https://api.nasa.gov/';

// Almacenamos en una constante la URL de la NASA dedicada a Rover
export const roverUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/';

// Almacenamos en una constante nuestra API Key
export const nasaApiKey = 'ENHD26eDky4QauvQ34xDNZwGCJvbAS3wZgusn6iS';

export default Api;
