import axios from "axios";

const options = {
  method: "GET",
  url: "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
    restaurant_tagcategory_standalone: "10591",
    restaurant_tagcategory: "10591",
    limit: "30",
    currency: "USD",
    open_now: "false",
    lunit: "km",
    lang: "en_US",
  },
  headers: {
    "X-RapidAPI-Key": "7342a9f649mshf05a7224389a459p1c8197jsn0db2ecea092d",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

const API_URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";
const API_KEY = "7342a9f649mshf05a7224389a459p1c8197jsn0db2ecea092d";

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(API_URL, {
      params: {
        bl_latitude: "11.847676",
        tr_latitude: "12.838442",
        bl_longitude: "109.095887",
        tr_longitude: "109.149359",
        restaurant_tagcategory_standalone: "10591",
        restaurant_tagcategory: "10591",
        limit: "30",
        currency: "USD",
        open_now: "false",
        lunit: "km",
        lang: "en_US",
      },
      headers: {
        "X-RapidAPI-Key": "7342a9f649mshf05a7224389a459p1c8197jsn0db2ecea092d",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const getPlacesData = async (type, sw, ne) => {
//   try {
//     const {
//       data: { data },
//     } = await axios.get(`${API_URL}/${type}`, {
//       params: {
//         sw,
//         ne,
//       },
//       headers: {
//         "x-api-key": API_KEY,
//       },
//     });
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const getWeatherData = async (lat, lng) => {
//   try {
//     const { data } = await axios.get(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`
//     );
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const getAirQualityData = async (lat, lng) => {
//   try {
//     const {
//       data: { data },
//     } = await axios.get(
//       `https://api.openaq.org/v1/latest?coordinates=${lat},${lng}`
//     );
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const getMapBoxDirections = async (coordinates) => {
//   try {
//     const { data } = await axios.get(
//       `https://api.mapbox.com/directions/v5/mapbox/driving/${coordinates[0][0]},${coordinates[0][1]};${coordinates[1][0]},${coordinates[1][1]}?geometries=geojson&access_token=${API_KEY}`
//     );
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const getCoordinates = async (address) => {
//   try {
//     const {
//       data: { features },
//     } = await axios.get(
//       `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${API_KEY}`
//     );
//     return features[0].center;
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const getNearbyPlaces = async (coordinates, type) => {
//   try {
//     const { data } = await axios.get(
//       `https://api.mapbox.com/geocoding/v5/mapbox.places/${type}.json?proximity=${coordinates[0]},${coordinates[1]}&access_token=${API_KEY}`
//     );
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const getDistanceMatrix = async (coordinates) => {
//   try {
//     const { data } = await axios.get(
//       `https://api.mapbox.com/directions-matrix/v1/mapbox/driving/${coordinates[0][0]},${coordinates[0][1]};${coordinates[1][0]},${coordinates[1][1]}?sources=0&destinations=1&access_token=${API_KEY}`
//     );
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const getMapBoxReverseGeocoding = async (coordinates) => {
//   try {
//     const { data } = await axios.get(
//       `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates[0]},${coordinates[1]}.json?access_token=${API_KEY}`
//     );
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getPlacedata = async () => {
//   try {
//   } catch (error) {
//     console.log(error);
//   }
// };
