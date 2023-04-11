// Menu mobile
const menu = document.getElementById('menu');

document.getElementsByClassName('menu-btn')[0].addEventListener('click', () => {
  menu.style.display = 'block';
});

document.getElementsByClassName('close-btn')[0].addEventListener('click', () => {
  menu.style.display = 'none';
});

document.getElementsByClassName('menu-options')[0].addEventListener('click', () => {
  menu.style.display = 'none';
});

// Projects

const projects = [
  {
    id: 1,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'image mobile': 'icons/Snapshoot Portfolio.svg',
    'image desktop': 'icons/Snapshoot Portfolio desktop.svg',
    technologies: ['Ruby', 'CSS', 'JavaScript', 'Bootstrap'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 2,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'image mobile': 'icons/Snapshoot Portfolio.svg',
    'image desktop': 'icons/Snapshoot Portfolio desktop.svg',
    technologies: ['Ruby', 'CSS', 'JavaScript', 'Bootstrap'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 3,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'image mobile': 'icons/Snapshoot Portfolio.svg',
    'image desktop': 'icons/Snapshoot Portfolio desktop.svg',
    technologies: ['Ruby', 'CSS', 'JavaScript', 'Bootstrap'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 4,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'image mobile': 'icons/Snapshoot Portfolio.svg',
    'image desktop': 'icons/Snapshoot Portfolio desktop.svg',
    technologies: ['Ruby', 'CSS', 'JavaScript', 'Bootstrap'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 5,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'image mobile': 'icons/Snapshoot Portfolio.svg',
    'image desktop': 'icons/Snapshoot Portfolio desktop.svg',
    technologies: ['Ruby', 'CSS', 'JavaScript', 'Bootstrap'],
    liveVersion: '#',
    source: '#',
  },
  {
    id: 6,
    name: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    'image mobile': 'icons/Snapshoot Portfolio.svg',
    'image desktop': 'icons/Snapshoot Portfolio desktop.svg',
    technologies: ['Ruby', 'CSS', 'JavaScript', 'Bootstrap'],
    liveVersion: '#',
    source: '#',
  },
];

const workSection = document.getElementById('work-section');

projects.forEach(project, idx) => {
  const  projectCards = document.createElement('div');
  projectCards.classList = 'project-cards'};
