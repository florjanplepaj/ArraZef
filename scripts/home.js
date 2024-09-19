import { getCover, covers } from "../Data/projects-covers.js";

renderCoverGrid();
function renderCoverGrid() {
  let coverHtml = "";

  covers.forEach((cover) => {
    coverHtml += `
    <div class="recent-projects-preview">
            <img class="recent-project-photo" src="${cover.image}" />
            <span class="recent-project-title">${cover.name}</span>
            <span class="recent-project-view-project-button">View Project</span>
    </div>
    `;
  });

  document.querySelector(".js-recent-projects-body").innerHTML = coverHtml;
}
