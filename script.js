// Mobile menu
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menuOptions = document.querySelector(".menu-options");
const menu = document.getElementById("menu");

// Open menu
menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
});
// Close menu
closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
});
// Close the menu if any link it's clicked
menuOptions.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    menu.style.display = "none";
  }
});

// Projects
const projects = [
  {
    id: 1,
    name: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imagemobile: "icons/Snapshoot Portfolio.svg",
    imagedesktop: "icons/Snapshoot Portfolio desktop.svg",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersion: "#",
    source: "#",
  },
  {
    id: 2,
    name: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imagemobile: "icons/Snapshoot Portfolio.svg",
    imagedesktop: "icons/Snapshoot Portfolio desktop.svg",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersion: "#",
    source: "#",
  },
  {
    id: 3,
    name: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imagemobile: "icons/Snapshoot Portfolio.svg",
    imagedesktop: "icons/Snapshoot Portfolio desktop.svg",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersion: "#",
    source: "#",
  },
  {
    id: 4,
    name: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imagemobile: "icons/Snapshoot Portfolio.svg",
    imagedesktop: "icons/Snapshoot Portfolio desktop.svg",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersion: "#",
    source: "#",
  },
  {
    id: 5,
    name: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imagemobile: "icons/Snapshoot Portfolio.svg",
    imagedesktop: "icons/Snapshoot Portfolio desktop.svg",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersion: "#",
    source: "#",
  },
  {
    id: 6,
    name: "Multi-Post Stories Gain+Glory",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imagemobile: "icons/Snapshoot Portfolio.svg",
    imagedesktop: "icons/Snapshoot Portfolio desktop.svg",
    technologies: ["Ruby on Rails", "CSS", "JavaScript", "HTML"],
    liveVersion: "#",
    source: "#",
  },
];

// WorkSection
function renderWorkSection() {
  const workSection = document.getElementById("work-section");
  workSection.classList.add("work-section-container", "flex-column");

  const projectCardsContainer = document.querySelector(
    ".projectcards-container"
  );
  // Creating an h2 element for the Work section's title
  const titleWorkSection = document.createElement("h2");
  titleWorkSection.textContent = "My Recent Works";
  titleWorkSection.classList.add("title-work-section");
  projectCardsContainer.insertAdjacentElement("beforebegin", titleWorkSection); // insert before to show up as title

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

    // Render the shownProject
    function renderShownProject(workSection) {
      const shownprojectContainer = document.querySelector(
        ".shown-project-container"
      );

      const showprojectContent = `<div class="shown-project flex-column">
      <button class="close-shown-project"></button>
      <div class="project-image"></div>
      <h3>${project.name}</h3>
      <ul>${technologiesList.outerHTML}</ul>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.
      </p>
      <div class="project-buttons flex-row">
        <button class="live-btn flex-row">See live <img src="icons/see live icon.svg" alt="see live icon"></button>
        <button class="source-btn flex-row">See source <img src="icons/Icon -GitHub.svg" alt="github icon"></button>
      </div>
    </div>`;
      if (shownprojectContainer.nodeType === Node.ELEMENT_NODE) {
        shownprojectContainer.insertAdjacentHTML(
          "beforeend",
          showprojectContent
        );
      }
      workSection.insertAdjacentElement("beforeend", shownprojectContainer);
    }
    renderShownProject(workSection);

    // PopUp
    const projectButtons = document.querySelectorAll(".project-btn");
    const closeShownProject = document.querySelectorAll(".close-shown-project");
    const popupContainer = document.querySelector(".shown-project-container");

    const openPopup = () => {
      popupContainer.style.display = "block";
      document.body.style.overflow = "hidden";
    };

    const closePopup = () => {
      popupContainer.style.display = "none";
      document.body.style.overflow = "";
    };

    const clickPopupContainer = (event) => {
      if (event.target === popupContainer) {
        closePopup();
      }
    };

    // Opens the popup when click each button with the class project-btn
    projectButtons.forEach((projectButton) => {
      projectButton.addEventListener("click", openPopup);
    });

    closeShownProject.forEach((closeProjects) => {
      closeProjects.addEventListener("click", closePopup);
    });

    popupContainer.addEventListener("click", clickPopupContainer);
  });

  // Validate contact form
  const form = document.getElementById("form");
  const email = document.getElementById("mail");
  const emailError = document.getElementById("email-error");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // check if email is lowercase
    if (email.value !== email.value.toLowerCase()) {
      emailError.textContent = "Email must be in lowercase";
      emailError.style.display = "block";
      return;
    }

    // check if email is valid
    const emailRegex =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email.value)) {
      emailError.textContent = "Invalid email format";
      emailError.style.display = "block";
      return;
    }

    // submit the form if all validations pass
    form.submit();
  });

  //Storage user data
  
}

window.onload = renderWorkSection;
