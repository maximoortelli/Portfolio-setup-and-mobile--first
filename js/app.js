function projectContructor(image, name, company, description, technology, buttonId) {
  this.image = image;
  this.name = name;
  this.company = company;
  this.description = description;
  this.technology = technology;
  this.buttonId = buttonId += "-button";
}

var tonic = new projectContructor(
  "media/Snapshoot Portfolio desk.png",
  "Tonic",
  {
    name: "CANOPY",
    position: "Back End Dev",
    date: "2015"
  },
  "A daily selection of privately personalized reads; no accounts or sign-ups required.",
  ["HTML", "CSS", "JavaScript"],
  "tonic"
)

var multiPostSories = new projectContructor(
  "media/Snapshoot Portfolio desk 1.png",
  "Multi-Post Stories",
  { name: "FACEBOOK", position: "Full Stack Dev", date: "2015" },
  "Experimental content creation feature that allows users to <br> add to an existing story over the course of a day without spamming their friends.",
  ["HTML", "Ruby on rails", "CSS", "Javascript"],
  "multi-post-stories"
)

var facebook360 = new projectContructor(
  "media/Snapshoot Portfolio desk 2.png",
  "Facebook 360",
  { name: "FACEBOOK", position: "Full Stack Dev", date: "2015" },
  "Exploring the future of media in Facebook's first Virtual Reality <br>app; a place to discover and enjoy 360 photos and videos on Gear VR.",
  ["HTML", "Ruby on rails", "CSS", "Javascript"],
  "facebook-360"
)

var uberNavigation = new projectContructor(
  "media/Snapshoot Portfolio desk 3.png",
  "Uber Navigation",
  {
    name: "Uber",
    position: "Lead Developer",
    date: "2018"
  },
  "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
  ["HTML", "Ruby on rails", "CSS", "JavaScript"],
  "uber-navigation"
)

var projects = [tonic, multiPostSories, facebook360, uberNavigation];

function generateTechnologyList(technologyArray) {
  var technologyList = '';

  for (var i = 0; i < technologyArray.length; i++) {
    technologyList += `<li><p>${technologyArray[i]}</p></li>`;
  }

  return technologyList;
}

var left = true;

function generateProjectCard(project) {

  let htmlTemplate = "";
  if (left === true) {
    htmlTemplate = `
      <div class="tarjeta flex-column">
        <img class="foto-tarjeta articulo-trabajo" src="${project.image}" alt="">
        <img class="foto-tarjeta-escritorio" src="${project.image}" alt="">
        <div class="texto-tarjeta">
          <h3 class="articulo-trabajo">${project.name}</h3>
          <ul class="articulo-trabajo empresa flex-row">
            <li>
              <h4>${project.company.name}</h4>
            </li>
            <li><img src="media/Counter.png"></li>
            <li>
              <p>${project.company.position}</p>
            </li>
            <li><img src="media/Counter.png"></li>
            <li>
              <p>${project.company.date}</p>
            </li>
          </ul>
          <p class="articulo-trabajo tarjeta-explicacion">${project.description}</p>
          <ul class="indices articulo-trabajo flex-row">
            ${generateTechnologyList(project.technology)}
          </ul>
          <div class="grupo-boton">
            <button id="${project.buttonId}" class="articulo-trabajo flex-row">See project</button>
          </div>
        </div>
      </div>
    `;
    left = false;
  }
  else {
    htmlTemplate = `
        <div class="tarjeta flex-column izq-tarjeta">
            <img class="articulo-trabajo foto-tarjeta" src="${project.image}" alt="">
            <div class="movete texto-tarjeta ">
            <h3 class="articulo-trabajo">${project.name}</h3>
            <ul class="empresa articulo-trabajo flex-row">
              <li>
                <h4>${project.company.name}</h4>
              </li>
              <li><img src="media/Counter.png"></li>
              <li>
                <p>${project.company.position}</p>
              </li>
              <li><img src="media/Counter.png"></li>
              <li>
                <p>${project.company.date}</p>
              </li>
            </ul>
            <p class="tarjeta-explicacion articulo-trabajo">${project.description}</p>
            <ul class="articulo-trabajo indices flex-row">
              ${generateTechnologyList(project.technology)}
            </ul>
            <div class="grupo-boton">
              <button id="${project.buttonId}" class="flex-row articulo-trabajo">See project</button>
            </div>
            </div>
            <img class="foto-tarjeta-escritorio-left" src="${project.image}" alt="">
        </div>
      `;
    left = true
  }

  return htmlTemplate;
}

var worksCardsButtons;
var quitPopUp;
var worksPopUpSection = document.getElementById("works-pop-up");

document.addEventListener('DOMContentLoaded', () => {

  var works = document.getElementById('trabajos');

  projects.forEach((n) => {
    works.innerHTML += generateProjectCard(n);
  }
  );

  worksCardsButtons = document.querySelectorAll(".tarjeta .grupo-boton button");


  worksCardsButtons.forEach((u) => {

    u.addEventListener("click", () => {

      var id = u.getAttribute('id');
      for (let i = 0; i < projects.length; i++) {
        if (id === projects[i].buttonId) {
          worksPopUpSection.innerHTML += worksPopUp(projects[i]);
        }
      }
      quitPopUp = document.querySelector(".tarjetas-popup .exit-boton");
      quitPopUp.addEventListener("click", () => {
        worksPopUpSection.innerHTML = "";
      });
    }
    );
  }
  );

});

//POPUP

function worksPopUp(project) {

  let htmlTemplate = "";
  htmlTemplate = `
  <div class="fondo-popup">
  <div class="flex-column tarjetas-popup ">
      <div class="flex-row arriba ">
          <h3 class="articulo-trabajo">
              ${project.name}
          </h3>
          <button class="exit-boton">
          </button>
      </div>
      <ul class="empresa articulo-trabajo flex-row">
          <li>
              <h4>${project.company.name}</h4>
          </li>
          <li><img src="media/Counter.png"></li>
          <li>
              <p>${project.company.position}</p>
          </li>
          <li><img src="media/Counter.png"></li>
          <li>
              <p>${project.company.date}</p>
          </li>
      </ul>
      <div class="popup-imagen-grupo">
      <img class="foto-popup articulo-trabajo" src="${project.image}" alt="">
      </div>
      <div class="escritorio-capa-popup">
          <p class="tarjeta-explicacion articulo-trabajo">
              ${project.description}
          </p>
          <div class="derecha lista">
              <ul class="lista indices articulo-trabajo flex-row">
                  ${generateTechnologyList(project.technology)}
              </ul>
              <hr>
              <div class="flex-row button-container">
                  <div class="grupo-boton"><button class="flex-row">See live <img class="button-icon"
                              src="media/See live icon.png"> </button></div>
                  <div class="grupo-boton"><button class="flex-row">See source <img class="button-icon"
                              src="media/See source icon.png"></button></div>
              </div>
          </div>
      </div>
  </div>
</div>`;
  return htmlTemplate;
}



