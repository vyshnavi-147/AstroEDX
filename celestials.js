// Sample mission data (replace with your mission details)
const celestialData = [
    {
        name: "Stars",
        description: "Stars are formed when clouds of gas and dust in space collapse under their own gravity. As the cloud collapses, it heats up and the gas begins to fuse together. This process releases energy, which causes the star to shine. The composition of a star depends on its mass. The more massive a star is, the more hydrogen it has and the hotter it burns. Stars with less mass have less hydrogen and burn for a longer time. The life cycle of a star is determined by its mass. Low-mass stars like the Sun can live for billions of years. Medium-mass stars can live for millions of years. High-mass stars can live for only thousands of years. When a star runs out of hydrogen, it begins to fuse other elements, such as helium. This process produces even more energy and causes the star to expand and become a red giant. Eventually, the star will collapse and explode in a supernova. The debris from a supernova can form new stars and planets. This process is how the elements that make up our Earth were created.", 
        image: "stars.jpg",
        // Add more details here
    },
    {
        name: "Planets",
        description: " Planets are celestial bodies that orbit a star. They are made up of mostly rock and metal, with some ice and gas. The composition of a planet depends on its location in the solar system. The inner planets, Mercury, Venus, Earth, and Mars, are made up of mostly rock and metal. They are located closer to the Sun, where the temperature is hotter. The outer planets, Jupiter, Saturn, Uranus, and Neptune, are made up of mostly gas and ice. They are located farther from the Sun, where the temperature is cooler. Planets are formed when a cloud of gas and dust in space collapses under its own gravity. As the cloud collapses, it heats up and the gas begins to clump together. The clumps of gas and dust eventually become planets. The process of planet formation takes millions of years. During this time, the planets are bombarded by other objects, such as asteroids and comets. These impacts help to shape the planets and their orbits.",
        image: "planets.jpg",
        // Add more details here
    },
    {
        name: "Moons",
        description: "Moons are celestial bodies that orbit a planet. They are made up of mostly rock and metal, with some ice and gas. The composition of a moon depends on its location in the solar system and how it was formed. The Moon is thought to have formed from the debris of a giant impact between Earth and another planet-sized object about 4.5 billion years ago. The impact ejected a large amount of material into space, which then coalesced to form the Moon. Other moons in the solar system are thought to have formed in a variety of ways, including by capture, co-formation, and fission. Fission is a process where a planet breaks apart and a moon forms from the resulting debris.",
        image: "moons.jpg",
        // Add more details here
    },
    {
        name: "Comets",
        description: "Comets are celestial bodies that are made up of ice, dust, and rock. They are thought to have formed in the outer solar system, in the Oort cloud or Kuiper belt. Comets are composed of a solid nucleus, a coma, and a tail. The nucleus is the solid core of the comet, and it is made up of ice, dust, and rock. The coma is the atmosphere that surrounds the nucleus, and it is made up of gas and dust that is released from the nucleus when it heats up. The tail is the stream of gas and dust that is emitted from the coma, and it can extend for millions of miles.When a comet's orbit brings it close to the Sun, the heat from the Sun causes the ice to vaporize and form a coma and tail. The coma and tail can be very bright, and they can sometimes be seen from Earth. Comets are thought to have formed in the outer solar system, in the Oort cloud or Kuiper belt. The Oort cloud is a spherical cloud of icy bodies that surrounds the solar system.",
        image: "comets.jpg",
        // Add more details here
    },
    {
        name:  "Asteroids",
        description: "Asteroids are small, rocky bodies that orbit the Sun. They are thought to be the remains of the original material that the planets were formed from. Asteroids are found in several different regions of the solar system, including the asteroid belt, the Kuiper belt, and the Oort cloud. The composition of asteroids varies depending on their location. Asteroids in the asteroid belt are mostly made of rock and metal, while asteroids in the Kuiper belt and Oort cloud are mostly made of ice and dust. Asteroids are thought to have formed when the planets were forming. As the planets grew, they swept up the remaining material in the solar system, leaving behind the asteroids. Asteroids can be a danger to Earth. If an asteroid were to impact Earth, it could cause a lot of damage. However, the chances of a major asteroid impact are very low.",
        image: "astroids.jpg",
        // Add more details here
    },
    {
        name: "Nebulae",
        description: "Nebulae are large clouds of gas and dust in space. They are composed of mostly hydrogen and helium, with small amounts of other elements. Nebulae are the birthplace of stars. Nebulae are formed when a cloud of gas and dust collapses under its own gravity. As the cloud collapses, it heats up and the gas begins to clump together. The clumps of gas and dust eventually become stars.",
        image: "nebulae.jpg",
        // Add more details here
    }
    // Add more mission objects here

    
];
const newCelestials = [
    {
        name: "Blackholes",
        description: "Black holes are regions of space where gravity is so strong that nothing, not even light, can escape. They are formed when a star collapses at the end of its life. The matter that makes up a black hole is squeezed into a very small space. This is called a singularity. The singularity is thought to be infinitely dense and have no size. The event horizon is the boundary around a black hole. It is the point of no return. Once matter or light crosses the event horizon, it cannot escape the black hole's gravity. Black holes are still a mystery to scientists. We are still learning about how they form and how they interact with the universe.",
        image: "blackhole.jpg",
        // Add more details here
    },

    {
        name: "Clusters",
        description: "A cluster is a group of celestial objects that are gravitationally bound together. There are many different types of clusters, including star clusters, galaxy clusters, and globular clusters. Clusters are formed when a cloud of gas and dust collapses under its own gravity. As the cloud collapses, it heats up and the gas begins to clump together. The clumps of gas and dust eventually become stars. The formation of clusters is a complex process that is not fully understood. However, scientists believe that it is influenced by the size and mass of the cloud, as well as the environment in which it is located. Clusters play an important role in the evolution of galaxies. They can help to regulate star formation and the distribution of matter in galaxies. They can also provide a home for black holes and other exotic objects. ",
        image: "clusters.jpg",
        // Add more details here
    },
];

celestialData.push(...newCelestials);







// Variables to keep track of loaded missions
let startIndex = 0;
const celestialsPerLoad = 3;

// Get references to elements
const celetialListSection = document.getElementById("celestial-list-section");
const celestialList = document.getElementById("celestial-list");
const loadMoreButton = document.getElementById("load-more");

// Create mission items during the initial loading
function createInitialCelestialItems() {
    for (let i = 0; i < celestialsPerLoad && i < celestialData.length; i++) {
        const celestial = celestialData[i];
        const listItem = createCelestialItem(celestial);

        // Add click event listener to mission item
        listItem.addEventListener("click", () => toggleCelestialDetails(listItem));

        // Append mission item to the mission list
        celestialList.appendChild(listItem);

        // Update the start index for the next batch
        startIndex++;
    }

    // Hide the "Load More" button if all missions are loaded initially
    if (startIndex >= celestialData.length) {
        loadMoreButton.style.display = "none";
    }
}

// Function to create a mission item with details
function createCelestialItem(celestial) {
    const listItem = document.createElement("li");
    listItem.classList.add("celestial-item");
    const arrowIcon = document.createElement("span");
    arrowIcon.classList.add("toggle-arrow");
    listItem.appendChild(arrowIcon);
    listItem.innerHTML += `<a>${celestial.name}</a>`;

    // Create mission details container
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("celestial-details-container");
    detailsContainer.style.display = "none"; // Initially hide details

    // Create mission content
    const celestialContent = document.createElement("div");
    celestialContent.classList.add("celestial-content");
    celestialContent.innerHTML = `<p>${celestial.description}</p><img src="${celestial.image}" alt="${celestial.name}">`;

    // Append mission content to details container
    detailsContainer.appendChild(celestialContent);

    // Append details container to mission item
    listItem.appendChild(detailsContainer);

    return listItem;
}

// Function to toggle mission details open and closed
function toggleCelestialDetails(celestialItem) {
    const detailsContainer = celestialItem.querySelector(".celestial-details-container");
    const arrowIcon = celestialItem.querySelector(".toggle-arrow");

    if (detailsContainer.style.display === "block") {
        detailsContainer.style.display = "none";
        arrowIcon.textContent = "▶"; // Down arrow
    } else {
        detailsContainer.style.display = "block";
        arrowIcon.textContent = "▼"; // Up arrow
    }
}

// Function to load more missions
function loadMoreCelestials() {
    // Calculate the end index for the new missions
    const endIndex = startIndex + celestialsPerLoad;

    // Loop through the mission data and add new mission items
    for (let i = startIndex; i < endIndex && i < celestialData.length; i++) {
        const celestial = celestialData[i];
        const listItem = createCelestialItem(celestial);

        // Add click event listener to mission item
        listItem.addEventListener("click", () => toggleCelestialDetails(listItem));

        // Append mission item to the mission list
        celestialList.appendChild(listItem);

        // Update the start index for the next batch
        startIndex++;
    }

    // Hide the "Load More" button if all missions are loaded
    if (startIndex >= celestialData.length) {
        loadMoreButton.style.display = "none";
    }
}

// Add click event listener to the "Load More" button
loadMoreButton.addEventListener("click", loadMoreCelestials);

// Initial loading of missions
createInitialCelestialItems();

