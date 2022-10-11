import './css/styles.css';
var debounce = require('lodash.debounce');
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './js/fetchCountries';
import { refs } from './js/refs';
import { createMarkupAll, createMarkupCountry } from './js/createMarkup';
import { clearMarkup } from './js/clearMarkup';

const DEBOUNCE_DELAY = 300;

refs.input.addEventListener('input', debounce(takeValueInput, DEBOUNCE_DELAY));

function takeValueInput() {
  clearMarkup();
  const searchQuery = refs.input.value.trim().toLowerCase();

  if (!searchQuery) {
    clearMarkup();
    return;
  }

  fetchCountries(searchQuery)
    .then(data => {
      if (data.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }
      clearMarkup();
      let markup = createMarkupAll(data);
      refs.list.innerHTML = markup;
      if (data.length === 1) {
        markup = createMarkupCountry(data);
        console.log(markup);
        clearMarkup();
        refs.info.innerHTML = markup;
      }
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
    });
}
