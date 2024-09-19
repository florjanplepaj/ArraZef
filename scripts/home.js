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

statisticNumbers();
function statisticNumbers() {
  startCounter(".js-years-experience", 1, 15, 1, 30);
  startCounter(".js-employers-over-the-years", 1, 170, 5, 30);
  startCounter(".js-residential-complete", 1, 690, 10, 30);
  startCounter(".js-millions-investment-complete", 1, 370, 5, 30);
}

function startCounter(elementId, start, target, increment, duration) {
  let counter = start;

  let interval = setInterval(function () {
    const element = document.querySelector(elementId);

    if (element) {
      element.innerHTML = counter;
      counter += increment;

      if (counter > target) {
        clearInterval(interval);
        element.innerHTML = target;
      }
    } else {
      clearInterval(interval);
      console.error(`Element not found: ${elementId}`);
    }
  }, duration);
}
