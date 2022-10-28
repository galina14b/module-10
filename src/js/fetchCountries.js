import listTemplate from './../templates/list.hbs';
import countryTemplate from './../templates/country.hbs';
import Notiflix from 'notiflix';

const refs = {
  countryList: document.querySelector('.country-list'),
  countryData: document.querySelector('.country-info')
}

export default function fetchCountries(name) {
  fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
    .then(result => {
      return result.json()
    })
    .then(country => {
      const markUp = listTemplate(country);
      const OneCountry = countryTemplate(country);
      checkingData(country, markUp, OneCountry);
    })
    .catch(Notiflix.Notify.failure("Oops, there is no country with that name")
)
}

function checkingData(data, info, full) {
  console.log(data)
  console.log(data.length)
  if (data.length >= 2 && data.length <= 10) {
    insertCountryName(info);
  } else if (data.length == 1) {
    insertCountryData(full)
  } else if (data.length > 10) {
    Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
  } 
};

function insertCountryName(name) {
  refs.countryList.textContent = '';
  refs.countryData.textContent = '';
  refs.countryList.insertAdjacentHTML('beforeend', name)
}

function insertCountryData(info) {
  refs.countryList.textContent = '';
  refs.countryData.textContent = '';
  refs.countryData.insertAdjacentHTML('beforeend', info)
}