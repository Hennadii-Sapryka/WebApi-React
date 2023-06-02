import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': '176c0a1017msh0b6fe7c9eae4618p193f33jsnff7baf522966',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlacesData = async (type, sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng
        },
        headers: {
          'X-RapidAPI-Key': '176c0a1017msh0b6fe7c9eae4618p193f33jsnff7baf522966',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      });

    return data;
  }
  catch (error) {
    console.log(error);
  }
};

