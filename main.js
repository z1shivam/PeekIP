const apiStatus = document.getElementById("apiStatus");
const apiQuery = document.getElementById("apiQuery");
const apiCountry = document.getElementById("apiCountry");

const apiRegion = document.getElementById("apiRegion");
const apiCity = document.getElementById("apiCity");
const apiZIP = document.getElementById("apiZIP");
const apiTimezone = document.getElementById("apiTimezone");
const apiCoordinate = document.getElementById("apiCoordinate");
const apiISP = document.getElementById("apiISP");
const apiOrg = document.getElementById("apiOrg");
const apiAsn = document.getElementById("apiAsn");

const url = "https://ipapi.co/json/";

fetch(url)
  .then((response) => response.json())
  .then((apiData) => {
    apiStatus.textContent = "Success";
    apiQuery.textContent = apiData.ip;
    apiCountry.textContent = `${apiData.country} (${apiData.country_code})`;
    apiRegion.textContent = `${apiData.region} (${apiData.region_code})`;
    apiCity.textContent = apiData.city;
    apiZIP.textContent = apiData.postal;
    apiTimezone.textContent = apiData.timezone;
    apiCoordinate.textContent = `${apiData.latitude}, ${apiData.longitude}`;
    apiISP.textContent = apiData.network;
    apiOrg.textContent = apiData.org;
    apiAsn.textContent = apiData.asn;
  });