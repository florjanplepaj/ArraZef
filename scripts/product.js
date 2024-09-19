import { getCover, covers } from "../Data/projects-covers.js";

renderCoverGridProjects();
function renderCoverGridProjects() {
  let coverHtml = "";

  covers.forEach((cover) => {
    coverHtml += `
    <div class="projects-page-preview">
            <img class="projects-page-photo" src="${cover.image}" />
            <span class="projects-page-title">${cover.name}</span>
            <span class="projects-page-view-project-button">View Project</span>
            <button class="projects-page-button-go-to">
              <i aria-hidden="true" class="fatt1 fas fa-angle-double-right"></i>
            </button>
          </div>
    `;
  });

  document.querySelector(".js-projects-page-body").innerHTML = coverHtml;
}
