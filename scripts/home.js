import { getCover, covers } from "../Data/projects-covers.js";

// Function to render the cover grid
renderCoverGrid();
function renderCoverGrid() {
  let coverHtml = "";

  covers.forEach((cover) => {
    coverHtml += `
      <div class="recent-projects-preview" data-cover-id="${cover.id}">
        <img class="recent-project-photo" src="${cover.pics[0]}" />
        <span class="recent-project-title">${cover.name}</span>
        <span class="recent-project-view-project-button">View Project</span>
      </div>
    `;
  });

  // Insert the generated HTML into the DOM
  document.querySelector(".js-recent-projects-body").innerHTML = coverHtml;
  document.querySelectorAll(".recent-projects-preview").forEach((element) => {
    element.addEventListener("click", (event) => {
      const coverId = element.dataset.coverId;
      console.log("hello");
      window.location.href = `project.html?coverId=${coverId}`;
    });
  });
}

// Set up an IntersectionObserver to trigger when the statistics section is visible
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Call the statisticNumbers function when the section is visible
        statisticNumbers();
        observer.unobserve(entry.target); // Stop observing after the function has been called
      }
    });
  },
  {
    threshold: 0.5, // Trigger when 50% of the element is visible
  }
);

// Observe the statistics section
const statsSection = document.querySelector(".js-statistics-section");
if (statsSection) {
  observer.observe(statsSection);
}

// Function to start the counters when the section is visible
function statisticNumbers() {
  startCounter(".js-years-experience", 1, 25, 1, 30);
  startCounter(".js-employers-over-the-years", 1, 60, 5, 30);
  startCounter(".js-residential-complete", 1, 120, 10, 30);
  startCounter(".js-millions-investment-complete", 1, 20, 5, 30);
}

// Function to start the counter animation
function startCounter(elementId, start, target, increment, duration) {
  let counter = start;

  let interval = setInterval(function () {
    const element = document.querySelector(elementId);

    if (element) {
      // Update the counter value in the DOM
      element.innerHTML = counter;
      counter += increment;

      // Stop the counter when it reaches the target
      if (counter > target) {
        clearInterval(interval);
        element.innerHTML = target;
      }
    } else {
      // Handle the case where the element is not found
      clearInterval(interval);
      console.error(`Element not found: ${elementId}`);
    }
  }, duration);
}
