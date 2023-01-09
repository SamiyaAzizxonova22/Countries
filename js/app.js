const body = document.querySelector("body");
const darkMode = document.querySelector(".dark_mode");
const countriesContainerList = document.querySelector('.countries__container_list')
darkMode.addEventListener("click", () => {
  body.classList.toggle("dark");
});

const api = "https://restcountries.com/v3.1/all";
const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  if (request.readyState !== 4) {
    console.log("loading");
  } else if (request.status == 200 && request.readyState == 4) {
    update(JSON.parse(request.responseText));
    console.log(JSON.parse(request.responseText));
  }
});

request.open('GET', api)
request.send()

function update(data){
  data.forEach((country) => {
    if (country.capital){
      countriesContainerList.innerHTML +=
      `<li class="countries__container_item">
      <a href="" class="countries__container_nation">
      <img src="${country.flags.svg}" alt="">
        <div>
          <h3 class="nation_name">${country.name.common}</h3>
          <small><b>Population:</b> ${country.population}</small>
          <small><b>Region:</b> ${country.region}</small>
          <small><b>Capital:</b> ${country.capital}</small>
        </div>
      </a>
    </li>`
    } else {
      countriesContainerList.innerHTML +=
      `<li class="countries__container_item">
      <a href="" class="countries__container_nation">
      <img src="${country.flags.svg}" alt="Bu yerda davlatning bayrog'i rasmi bor">
        <div>
          <h3 class="nation_name">${country.name.common}</h3>
          <small><b>Population:</b> ${country.population}</small>
          <small><b>Region:</b> ${country.region}</small>
          <small><b>Capital:</b>No capital</small>
        </div>
      </a>
    </li>`
    }

  });
}

const activ = document.querySelector('.search__filter_region')

activ.addEventListener('click', ()=> {
  document.querySelector('.regions').classList.toggle('active')
})
