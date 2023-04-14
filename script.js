// Menu mobile
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menuOptions = document.querySelector(".menu-options");
const menu = document.getElementById("menu");

//Open menu
menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
});
//Close menu
closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
});
//Close the menu if any link it's clicked
menuOptions.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    menu.style.display = "none";
  }
});

//Projects
const projects = [
  {
    id: 1,
    name: "Keeping track of hundreds of components",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    "image mobile": "icons/Snapshoot Portfolio.svg",
    "image desktop": "icons/Snapshoot Portfolio desktop.svg",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersion: "#",
    source: "#",
  },
  {
    id: 2,
    name: "Keeping track of hundreds of components",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    "image mobile": "icons/Snapshoot Portfolio.svg",
    "image desktop": "icons/Snapshoot Portfolio desktop.svg",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersion: "#",
    source: "#",
  },
  {
    id: 3,
    name: "Keeping track of hundreds of components",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    "image mobile": "icons/Snapshoot Portfolio.svg",
    "image desktop": "icons/Snapshoot Portfolio desktop.svg",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersion: "#",
    source: "#",
  },
  {
    id: 4,
    name: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    "image mobile": "icons/Snapshoot Portfolio.svg",
    "image desktop": "icons/Snapshoot Portfolio desktop.svg",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersion: "#",
    source: "#",
  },
  {
    id: 5,
    name: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    "image mobile": "icons/Snapshoot Portfolio.svg",
    "image desktop": "icons/Snapshoot Portfolio desktop.svg",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersion: "#",
    source: "#",
  },
  {
    id: 6,
    name: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    "image mobile": "icons/Snapshoot Portfolio.svg",
    "image desktop": "icons/Snapshoot Portfolio desktop.svg",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersion: "#",
    source: "#",
  },
];

//WorkSection
function renderWorkSection() {
  const workSection = document.getElementById("work-section");
  workSection.classList.add("work-section-container", "flex-column");

  const projectCardsContainer = document.querySelector(
    ".projectcards-container"
  );
  //Creating an h2 element for the Work section's title and adding a class to it, then inserting to projectCardsContainer
  const titleWorkSection = document.createElement("h2");
  titleWorkSection.textContent = "My Recent Works";
  titleWorkSection.classList.add("title-work-section");
  projectCardsContainer.insertAdjacentElement("beforebegin", titleWorkSection);

  // Loop through each project and create a card for it
  projects.forEach((project) => {
    const projectCard = document.createElement("article");
    const contentCard = document.createElement("div");
    const projectTitle = document.createElement("h3");
    const technologiesList = document.createElement("ul");
    const seeProjectBtn = document.createElement("button");

    projectCard.classList.add("project-cards", "flex-column");
    contentCard.classList.add("content-cards", "flex-column");
    projectTitle.textContent = project.name;
    technologiesList.classList.add("technologies", "flex-row");

    // Loop through each technology and add it to the technologies list
    project.technologies.forEach((technology) => {
      const technologyItem = document.createElement("li");
      technologyItem.textContent = technology;
      technologiesList.appendChild(technologyItem);
    });

    seeProjectBtn.textContent = "See project";
    seeProjectBtn.classList.add("project-btn", "btn");
    seeProjectBtn.id = project.id;

    contentCard.appendChild(projectTitle);
    contentCard.appendChild(technologiesList);
    contentCard.appendChild(seeProjectBtn);
    projectCard.appendChild(contentCard);

    // Check if the value is an element before using insertAdjacentElement
    if (projectCardsContainer.nodeType === Node.ELEMENT_NODE) {
      projectCardsContainer.insertAdjacentElement("beforeend", projectCard);
    }
  });

  // Render the shownProject
  function renderShownProject(workSection) {
    const shownprojectContainer = document.querySelector(
      ".shown-project-container"
    );
    const showprojectContent = `<div class="shown-project flex-column">
  <button class="close-shown-project"><img src="icons/Icon - Cancel project.svg" alt="close button" width="24px" height="24px"></button>
  <img src="icons/Snapshoot Portfolio.svg" alt="project's image" />
  <h3>Keeping track of hundreds of components</h3>
  <ul class="technologies flex-row">
    <li>Ruby on Rails</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>HTML</li>
  </ul>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.
  </p>
  <div class="project-buttons flex-row">
    <button class="live-btn flex-row">See live <img src="icons/see live icon.svg" alt="see live icon"></button>
    <button class="source-btn flex-row">See source <img src="icons/Icon -GitHub.svg" alt="github icon"></button>
  </div>
  </div>`;
    if (shownprojectContainer.nodeType === Node.ELEMENT_NODE) {
      shownprojectContainer.insertAdjacentHTML("beforeend", showprojectContent);
      workSection.insertAdjacentElement("beforeend", shownprojectContainer);
    }
  }

  renderShownProject(workSection);

  const openPopupBtns = document.querySelectorAll(".project-btn");
  const closePopupBtn = document.querySelector(".close-shown-project");
  const popupContainer = document.querySelector(".shown-project-container");

  openPopupBtns.forEach((openPopupBtn) => {
    openPopupBtn.addEventListener("click", () => {
      popupContainer.style.display = "block";
    });
  });

  closePopupBtn.addEventListener("click", () => {
    popupContainer.style.display = "none";
  });

  popupContainer.addEventListener("click", (event) => {
    if (event.target === popupContainer) {
      popupContainer.style.display = "none";
    }
  });
}

window.onload = renderWorkSection();
