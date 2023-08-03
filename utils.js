const getLocationFromIp = async () => {
  const response = await fetch("https://ipecho.io/json");
  const { ip } = await response.json();

  const URL = `https://ipapi.co/${ip}/json/`;

  const res = await fetch(URL);

  const data = await res.json();
  return data;
};

exports.getLocationFromIp = getLocationFromIp;

const fetchWeatherDataByCountry = async (city) => {
  // console.log("city", city);
  const api_key = "1d35dcc8063b4122ad764306233001";
  let url = `https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${city}&days=7`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

exports.fetchWeatherDataByCountry = fetchWeatherDataByCountry;
