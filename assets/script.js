/* 
TOOLS:
-creare un array con i membri del team
-prendere l'elemento dell' html e inserire nelel card
- creare la card per ogni membro
-creare html della card con le info
*/

//creare un array con i membri del team

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];



//prendere l'elemento dell' html e inserire nelel card
const container = document.getElementById("team-container");

//creare la card per ogni membro
teamMembers.forEach(membri => {
  //divisione del div in colonna
  const colonne = document.createElement("div");
  colonne.classList.add("col-12", "col-md-6", "col-lg-4");

  
  //creare html della card con le info
    colonne.innerHTML = `
    <div class="team-card">
      <img src="${membri.img}" alt="${membri.name}">
      <div class="team-info">
        <h5>${membri.name}</h5>
        <p>${membri.role}</p>
        <a href="mailto:${membri.email}">${membri.email}</a>
      </div>
    </div>
  `;
  container.appendChild(colonne);
})