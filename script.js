const btn = document.querySelector('#btn') ;
const container = document.getElementById('container');
const toggleMenu = document.querySelector('#toggle-menu');
const menu = document.querySelector('#menu')

let startingIndex = 0;
let endingIndex = 3;

const projects= [
    {
        id: 1,
        image: "./6.png",
        name: 'Healthy Foodies',
        link: 'https://rose768510.github.io/Healthy-Foodies/',
        description: "healthy foods"
    },

    {
        id: 2,
        image: "./7.png",
        name: 'Floral Field',
        link: 'https://rose768510.github.io/Floral-Field/',
        description: "Sale of flowers"
    },

    {
        id: 3,
        image: "./4.png",
        name: 'Cat-app',
        link: ' https://rose768510.github.io/Cat-app/',
        description: "Cute cats"
    },

    {
        id: 4,
        image: "./8.png",
        name: 'Statistic Calculator',
        link: 'https://rose768510.github.io/Calculator/',
        description: "Statistic Calculator"
    },    
    
    {
        id: 5,
        image: "./9.png",
        name: 'Calories Counter',
        link: 'https://rose768510.github.io/Calories-Counter/',
        description: "Count of calories"
    },

    {
        id: 6,
        image: "./10.png",
        name: 'Game',
        link: 'https://rose768510.github.io/Game/',
        description: "Game"
    },

    {
        id: 7,
        image: "./11.png",
        name: 'Pierre, Feuille, Siceaux',
        link: 'https://rose768510.github.io/Pierre-Feuille-Siceaux/',
        description: "Pierre, feuille, siceaux"
    },

    {
        id: 8,
        image: "./12.png",
        name: 'Number Sorter',
        link: 'https://rose768510.github.io/Number-Sorter/',
        description: "Sort number"
    },

    {
        id: 9,
        image: "./13.png",
        name: 'Random Color',
        link: 'https://rose768510.github.io/Random-Color/',
        description: "Color Built Randomly"
    },

    {
        id: 10,
        image: "./14.png",
        name: 'Shopping Cart',
        link: 'https://rose768510.github.io/Shopping-Cart/',
        description: "Cart of shop"
    },

    {
        id: 11,
        image: "./15.png",
        name: 'ZicPlayer',
        link: 'https://rose768510.github.io/ZicPlayer/',
        description: "Music player app"
    },

    {
        id: 12,
        image: "./16.png",
        name: 'Spreads Sheets',
        link: 'https://rose768510.github.io/Spreads-Sheets/',
        description: "Calculus Paper"
    },

];

const displayProjects = projects => {
    projects.forEach(
        ({name, id, image, link, description}) => {
            
            container.innerHTML += `
                <div class="project">
                    <a href="${link}" target="_blank" id="${id}">
                        <img src="${image}" alt="${description}">
                        <span class="no-underlined">${name}</span>
                    </a>
                </div>
            `;
        }
    );
};

displayProjects(projects.slice(startingIndex, endingIndex));

const seeMore = () => {
    startingIndex += 3;
    endingIndex += 3;

    displayProjects(projects.slice(startingIndex, endingIndex));
        if(projects.length <= endingIndex){
            btn.disabled = true;
            btn.style.cursor = 'not-allowed';
            btn.textContent = 'No more project to load.'
        }
};

btn.addEventListener('click', seeMore);

toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    }
);

document.querySelectorAll('.nav-style').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    })
})