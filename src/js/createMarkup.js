export function createMarkupAll(countries) {
  return countries
    .map(({ name: { common }, flags: { svg } }) => {
      return /*html*/ `<li>
        <img src="${svg}" alt="${common}" width="30" height="30"/>
        <p> ${common}</p>
        </li>`;
    })
    .join('');
}

export function createMarkupCountry([
  {
    name: { official, common },
    capital,
    population,
    flags: { svg },
    languages,
  },
]) {
  return /*html*/ `<div>
            <img src="${svg}" alt="${common}" width="30"/>
            <h2>${official}</h2>
            </div>
            <p>Capital: <span>${[...capital]}</span></p>
            <p>Population: <span>${population}</span></p>
            <p>Languages: <span>${[...Object.values(languages)].join(
              ', '
            )}</span></p>`;
}
