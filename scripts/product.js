import { getCover, covers } from "../Data/projects-covers.js";
renderCoverGridProjects();
function renderCoverGridProjects() {
  let coverHtml = "";

  covers.forEach((cover) => {
    coverHtml += `
    <div class="projects-page-preview">
            <img class="projects-page-photo" src="${cover.pics[0]}" />
            <span class="projects-page-title">${cover.name}</span>
            <span class="projects-page-view-project-button js-projects-page-view-project-button">Vedi Progetto</span>
          
            <button class="projects-page-button-go-to js-projects-page-button-go-to" data-cover-id = "${cover.id}" data-cover-name = "${cover.name}">
              <i aria-hidden="true" class="fatt1 fas fa-angle-double-right"></i>
            </button>
            
          </div>
    `;
  });

  document.querySelector(".js-projects-page-body").innerHTML = coverHtml;

  document
    .querySelectorAll(".js-projects-page-button-go-to")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const coverId = button.dataset.coverId;
        const coverName = button.dataset.coverName;
        goToSelectedProject(coverId, coverName);
      });
    });
}
function goToSelectedProject(coverId, coverName) {
  const url = `project.html?coverName=${coverName}&coverId=${coverId}`;
  window.location.href = url;
}
