//fethce
fetch("https://kea-alt-del.dk/t7/superheroes/")
  .then((res) => res.json())
  .then(showSuperheroes);

//loope
function showSuperheroes(data) {
  data.forEach(showSuperhero);
}

//clone, ændre, appende
function showSuperhero(hero) {
  console.log(hero);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("h2").textContent = hero.alias;
  copy.querySelector("p.powers").textContent = hero.powers;
  copy.querySelector("img").src = hero.image;
  copy.querySelector("p.weaknesses").textContent = hero.weaknesses;
  copy.querySelector("p.realname").textContent = hero.realName;
  copy.querySelector("p.origin").textContent = hero.origin;
  copy.querySelector("p.active").textContent = hero.active;
  copy.querySelector("p.height").textContent = hero.height;
  copy.querySelector("p.isevil").textContent = hero.isEvil;
  copy.querySelector("p.day").textContent = hero.birthday.day;
  copy.querySelector("p.month").textContent = hero.birthday.month;
  copy.querySelector("p.year").textContent = hero.birthday.year;

  const parent = document.querySelector(".grid");
  parent.appendChild(copy);
}
