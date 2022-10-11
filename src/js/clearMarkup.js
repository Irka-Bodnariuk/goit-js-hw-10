import { refs } from './refs';

export function clearMarkup() {
  refs.info.innerHTML = '';
  refs.list.innerHTML = '';
}
