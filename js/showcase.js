import { Projects } from "./showcaseData.js";

function createCard(root, projectInfo, wow_time_delay) {
  const { projectName, image, link, desc, author } = projectInfo;
  root.innerHTML += `
        <div class="card animate__animated wow animate__fadeInUp animate__fast" data-wow-delay="${wow_time_delay}" data-wow-offset="-200">
            <a href="${link}">
                <img class="projectImg" src="${image}" alt="">
            </a>
            <h1 class="projectName">${projectName.toUpperCase()}</h1>
            <p class="projectDesc">${desc}</p>
            <div class="projectDesc"><i>Authors: ${author}</i></div>
        </div>
    `;
}

function showcaseProjects(divName) {
  let row = document.getElementById(divName);
  let wow_time_delay = 1.;
  for (let index = 0; index < Projects.length; index++) {
    var proj = Projects[index];
    createCard(row, proj, (index < 2)?'0.5s':'0s');
  }
}

showcaseProjects("showcaseContainer");
// showcaseProjects("showcaseContainerPhone");
