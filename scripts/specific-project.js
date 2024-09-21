import { getCover, covers } from "../Data/projects-covers.js";

renderSelectedProject();

export function renderSelectedProject() {
  const url = new URL(window.location.href);
  const coverId = url.searchParams.get("coverId");

  const matchingProject = getCover(coverId);

  let maxIndex = matchingProject.pics.length - 1;
  let index = 0;

  const selectedProjectHTML = `
    <div class="selected-project-left-container">
      <span class="selected-project-left-title">${matchingProject.name}</span>
      <span class="selected-project-left-location">
        Location: <span class="selected-project-left-location-text">${
          matchingProject.location
        }</span>
      </span>
      <a class="selected-project-left-location" href="projects.html">
        <button class="selected-project-left-all-projects-button">
          <i aria-hidden="true" class="fatt8 fas fa-angle-double-left"></i>
          <span class="selected-project-left-all-projects">All projects</span>
        </button>
      </a>
    </div>
    <div class="selected-project-right-container">
      <div class="selected-project-right-top-container js-selected-project-right-top-container">
        <button class="top-left-button-slider js-top-left-button-slider">
          <i aria-hidden="true" class="fatt4 fas fa-angle-left"></i>
        </button>
        <img class="choosed-pic" src="${matchingProject.pics[0]}" />
        <button class="top-right-button-slider js-top-right-button-slider">
          <i aria-hidden="true" class="fatt4 fas fa-angle-right"></i>
        </button>
      </div>
      <div class="selected-project-right-bottom-container">
        <button class="bottom-left-button-slider js-bottom-left-button-slider">
          <i aria-hidden="true" class="fatt6 fas fa-angle-left"></i>
        </button>
        <div class="bottom-right-pic-container js-bottom-right-pic-container">
          ${matchingProject.pics
            .map(
              (pic, i) => `
            <img class="unselected-pic" src="${pic}" data-index="${i}" />
          `
            )
            .join("")}
        </div>
        <button class="bottom-right-button-slider js-bottom-right-button-slider">
          <i aria-hidden="true" class="fatt5 fas fa-angle-right"></i>
        </button>
      </div>
    </div>
  `;

  document.querySelector(".js-selected-project").innerHTML =
    selectedProjectHTML;

  buttonClick(matchingProject, index, maxIndex);
}

function buttonClick(matchingProject, index, maxIndex) {
  const updateImage = () => {
    const selectedPicHtml = `
      <img class="choosed-pic" src="${matchingProject.pics[index]}" />
    `;
    document.querySelector(
      ".js-selected-project-right-top-container .choosed-pic"
    ).outerHTML = selectedPicHtml; // Only update the image
  };

  // Left button event listener (main image)
  document
    .querySelector(".js-top-left-button-slider")
    .addEventListener("click", () => {
      index = index === 0 ? maxIndex : index - 1; // Move to the previous image
      updateImage();
    });

  // Right button event listener (main image)
  document
    .querySelector(".js-top-right-button-slider")
    .addEventListener("click", () => {
      index = index === maxIndex ? 0 : index + 1; // Move to the next image
      updateImage();
    });

  // Bottom image selection
  document.querySelectorAll(".unselected-pic").forEach((img) =>
    img.addEventListener("click", (event) => {
      index = parseInt(event.target.getAttribute("data-index"));
      updateImage();
    })
  );

  // Scroll functionality for bottom container
  const bottomPicContainer = document.querySelector(
    ".js-bottom-right-pic-container"
  );
  const scrollAmount = 100; // Adjust this value based on how much to scroll

  // Scroll left
  document
    .querySelector(".js-bottom-left-button-slider")
    .addEventListener("click", () => {
      bottomPicContainer.scrollLeft -= scrollAmount;
    });

  // Scroll right
  document
    .querySelector(".js-bottom-right-button-slider")
    .addEventListener("click", () => {
      bottomPicContainer.scrollLeft += scrollAmount;
    });
}
