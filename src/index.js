import './css/styles.css';
import fetchCountries from './js/fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const form = document.querySelector('input#search-box');
let country = '';

form.addEventListener('input', debounce(getData, DEBOUNCE_DELAY))

function getData() {
  country = form.value.toLowerCase().trim();
  fetchCountries(country);
}



