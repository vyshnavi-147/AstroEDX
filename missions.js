// Sample mission data (replace with your mission details)
const missionData = [
    {
        name: "Apollo 11",
        description: "Apollo 11 was the American spaceflight that first landed humans on the Moon. Commander Neil Armstrong and lunar module pilot Buzz Aldrin landed the Apollo Lunar Module Eagle on July 20, 1969, at 20:17 UTC, and Armstrong became the first person to step onto the surface six hours and 39 minutes later, on July 21 at 02:56 UTC.2 The mission was the culmination of the Apollo program and a massive national commitment by the United States to beat the Soviet Union in putting people on the Moon.0 The Apollo 11 Command Module, Columbia, was the living quarters for the three-person crew during most of the first crewed lunar landing mission in July 1969.", 
        image: "apollo11.jpg",
        // Add more details here
    },
    {
        name: "Voyager 1",
        description: "Voyager 1 is the first spacecraft to travel beyond the solar system and reach interstellar space. The probe launched on Sept. 5, 1977 — about two weeks after its twin Voyager 2 — and as of August 2022 is approximately 14.6 billion miles (23.5 billion kilometers) away from our planet, making it Earth's farthest spacecraft. Voyager 1 is currently zipping through space at around 38,000 mph (17 kilometers per second), according to NASA Jet Propulsion Laboratory. When Voyager 1 launched a mission to explore the outer planets in our solar system nobody knew how important the probe would still be 45 years later The probe has remained operational long past expectations and continues to send information about its journeys back to Earth.",
        image: "voyager1.jpg",
        // Add more details here
    },
    {
        name: "Mars Rover Curiosity",
        description: "NASA's Curiosity rover is currently roaming Mars' landscape looking for signs of life and learning about the Red Planet's unique environment. As of Aug. 2, 2022, the rover has traveled 17.64 miles (28.39 kilometers). Curiosity was launched aboard an Atlas V rocket from Cape Canaveral Air Force Station, Florida on Nov. 26, 2011, and landed on Aug. 5, 2012 after taking eight months and 10 days to reach the Red Planet. The rover is part of NASA's Mars Science Laboratory mission which tested a novel landing method that saw the spacecraft descend on a parachute before its landing system fired up its rockets and hovered as the rover was lowered down onto the surface. A similar entry and landing process was repeated in Feb. 2021 when the Perseverance rover arrived on Mars. ",
        image: "mars_rover.jpg",
        // Add more details here
    },
    {
        name: "Pioneer",
        description: "The Pioneer 10 mission, launched on March 2, 1972, was a pioneering endeavor in space exploration. Its primary objectives encompassed solar and interstellar exploration. After journeying through the asteroid belt, Pioneer 10 provided groundbreaking insights during its flyby of Jupiter in December 1973, shedding light on Jupiter's magnetic field, atmosphere, and radiation environment. Yet, its historic achievement came when it became the first human-made object to venture into interstellar space on June 13, 1983, beyond the orbit of Pluto. The mission's last signal was received on January 23, 2003, when it was approximately 12 billion kilometers from Earth. Pioneer 10's legacy remains, having laid the foundation for future deep space exploration and expanding our understanding of the outer realms of the solar system and interstellar space.",
        image: "pioneer.jpg",
        // Add more details here
    },
    {
        name:  "New Horizons",
        description: "The New Horizons mission, launched on January 19, 2006, by NASA, was a remarkable mission aimed at exploring the outer reaches of our solar system. Its primary objective was to conduct a close-up study of Pluto and its moon, Charon, as well as to investigate the Kuiper Belt, a region populated with ancient, icy objects. On July 14, 2015, New Horizons achieved its historic flyby of Pluto, providing humanity with the first-ever close-up images and data of this distant dwarf planet. The mission unveiled a complex and diverse world with mountains of ice, vast plains, and a hazy atmosphere. New Horizons continued its journey into the Kuiper Belt, where it conducted further studies of Kuiper Belt objects like Arrokoth in January 2019. New Horizons' groundbreaking discoveries have expanded our knowledge of the outer solar system and enhanced our understanding of these distant, enigmatic realms.",
        image: "new_horizons.jpg",
        // Add more details here
    },
    {
        name: "Hubble Space Telescope",
        description: "The Hubble Space Telescope, launched on April 24, 1990, has been a transformative force in astronomy and space exploration. Its primary mission is to observe the universe in visible, ultraviolet, and near-infrared light, free from the distorting effects of Earth's atmosphere. Hubble has provided stunning images and invaluable data that have revolutionized our understanding of the cosmos. On April 25, 1990, Hubble sent its first images back to Earth, revealing previously unseen details of distant galaxies, nebulae, and planets. Its observations have contributed to significant discoveries, including the precise measurement of the rate of the universe's expansion, known as the Hubble Constant. Hubble has also captured breathtaking images of distant galaxies, nebulae, and planets, advancing our knowledge of the universe's history and structure. Over the years, Hubble's instruments and capabilities have been upgraded to ensure its continued success, making it one of the most iconic and enduring missions in space exploration history.",
        image: "hubble.jpg",
        // Add more details here
    }
    // Add more mission objects here

    
];
const newMissions = [
    {
        name: "Juno",
        description: "The Juno mission, launched by NASA on August 5, 2011, with its arrival at Jupiter on July 4, 2016, has a primary purpose of studying the largest planet in our solar system, Jupiter. Equipped with a suite of scientific instruments, Juno aims to understand the planet's composition, gravity field, magnetic field, and polar magnetosphere. This mission provides insights into Jupiter's origins, structure, and atmospheric composition, helping scientists unlock the mysteries of the gas giant and gain a better understanding of the early solar system. Juno's highly elliptical orbit allows it to make close flybys of Jupiter, providing unprecedented data and images of the planet's powerful storms, such as the Great Red Spot, and revealing the deep secrets of this enigmatic world.",
        image: "juno.jpg",
        // Add more details here
    },
];

missionData.push(...newMissions);







// Variables to keep track of loaded missions
let startIndex = 0;
const missionsPerLoad = 3;

// Get references to elements
const missionListSection = document.getElementById("mission-list-section");
const missionList = document.getElementById("mission-list");
const loadMoreButton = document.getElementById("load-more");

// Create mission items during the initial loading
function createInitialMissionItems() {
    for (let i = 0; i < missionsPerLoad && i < missionData.length; i++) {
        const mission = missionData[i];
        const listItem = createMissionItem(mission);

        // Add click event listener to mission item
        listItem.addEventListener("click", () => toggleMissionDetails(listItem));

        // Append mission item to the mission list
        missionList.appendChild(listItem);

        // Update the start index for the next batch
        startIndex++;
    }

    // Hide the "Load More" button if all missions are loaded initially
    if (startIndex >= missionData.length) {
        loadMoreButton.style.display = "none";
    }
}

// Function to create a mission item with details
function createMissionItem(mission) {
    const listItem = document.createElement("li");
    listItem.classList.add("mission-item");
    const arrowIcon = document.createElement("span");
    arrowIcon.classList.add("toggle-arrow");
    listItem.appendChild(arrowIcon);
    listItem.innerHTML += `<a>${mission.name}</a>`;

    // Create mission details container
    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("mission-details-container");
    detailsContainer.style.display = "none"; // Initially hide details

    // Create mission content
    const missionContent = document.createElement("div");
    missionContent.classList.add("mission-content");
    missionContent.innerHTML = `<p>${mission.description}</p><img src="${mission.image}" alt="${mission.name}">`;

    // Append mission content to details container
    detailsContainer.appendChild(missionContent);

    // Append details container to mission item
    listItem.appendChild(detailsContainer);

    return listItem;
}

// Function to toggle mission details open and closed
function toggleMissionDetails(missionItem) {
    const detailsContainer = missionItem.querySelector(".mission-details-container");
    const arrowIcon = missionItem.querySelector(".toggle-arrow");

    if (detailsContainer.style.display === "block") {
        detailsContainer.style.display = "none";
        arrowIcon.textContent = "▶"; // Down arrow
    } else {
        detailsContainer.style.display = "block";
        arrowIcon.textContent = "▼"; // Up arrow
    }
}

// Function to load more missions
function loadMoreMissions() {
    // Calculate the end index for the new missions
    const endIndex = startIndex + missionsPerLoad;

    // Loop through the mission data and add new mission items
    for (let i = startIndex; i < endIndex && i < missionData.length; i++) {
        const mission = missionData[i];
        const listItem = createMissionItem(mission);

        // Add click event listener to mission item
        listItem.addEventListener("click", () => toggleMissionDetails(listItem));

        // Append mission item to the mission list
        missionList.appendChild(listItem);

        // Update the start index for the next batch
        startIndex++;
    }

    // Hide the "Load More" button if all missions are loaded
    if (startIndex >= missionData.length) {
        loadMoreButton.style.display = "none";
    }
}

// Add click event listener to the "Load More" button
loadMoreButton.addEventListener("click", loadMoreMissions);

// Initial loading of missions
createInitialMissionItems();

