document.addEventListener("DOMContentLoaded", function () {
    const planetInput = document.getElementById("planet-input");
    const fetchInfoBtn = document.getElementById("fetch-info-btn");
    const planetInfo = document.getElementById("planet-info");

    fetchInfoBtn.addEventListener("click", function () {
        const planetName = planetInput.value.trim();

        if (planetName !== "") {
            let planetData;

            switch (planetName.toLowerCase()) {
                case "earth":
                    planetData = {
                        "name": "Earth",
                        "mass(kg)": 5.975 * Math.pow(10, 24), // Use Math.pow
                        "radius(km)": 6378.1, // Remove 'km' unit
                        "period": 365.2 ,
                        "temperature": 288,
                        "distance_light_year": 0,
                        "host_star_mass": 1,
                        "host_star_temperature": 6000
                    };
                    break;
                case "mercury":
                    planetData = {
                        "name": "Mercury",
                        "mass(kg)": 3.3 * Math.pow(10, 23),
                        "radius(km)": 2439,
                        "period": 88,
                        "temperature": 400,
                        "distance_light_year": 0.000011,
                        "host_star_mass": 1,
                        "host_star_temperature": 6000
                    };
                    break;

                case "venus":
                    planetData = {
                        "name": "Venus",
                        "mass(kg)": 4.86 * Math.pow(10, 24),
                        "radius(km)": 6052,
                        "period": 224.7,
                        "temperature": 737,
                        "distance_light_year": 0.000004,
                        "host_star_mass": 1,
                        "host_star_temperature": 6000
                    };
                    break;
                case "mars":
                    planetData = {
                        "name": "Mars",
                        "mass(kg)": 5.5 * Math.pow(10, 24),
                        "radius(km)": 3396,
                        "period": 687,
                        "temperature": 210,
                        "distance_light_year": 0.000037,
                        "host_star_mass": 1,
                        "host_star_temperature": 6000
                    };
                    break;
                case "jupiter":
                    planetData = {
                        "name": "Jupiter",
                        "mass(kg)": 1.975 * Math.pow(10, 27),
                        "radius(km)": 71492,
                        "period": 4331,
                        "temperature": 165,
                        "distance_light_year": 0.000088,
                        "host_star_mass": 1,
                        "host_star_temperature": 6000
                    };
                    break;
                case "saturn":
                    planetData = {
                        "name": "Saturn",
                        "mass(kg)": 5.68 * Math.pow(10, 26),
                        "radius(km)": 60268,
                        "period": 10747,
                        "temperature": 134,
                        "distance_light_year": 0.00017,
                        "host_star_mass": 1,
                        "host_star_temperature": 6000
                    };
                    break;
                case "uranus":
                    planetData = {
                        "name": "Uranus",
                        "mass(kg)": 86.811 * Math.pow(10, 24),
                        "radius(km)": 25559,
                        "period": 30589,  
                        "temperature": 76,
                        "distance_light_year": 0.000304,
                        "host_star_mass": 1,
                        "host_star_temperature": 6000
                    };
                    break;
                case "neptune":
                    planetData = {
                        "name": "Neptune",
                        "mass(kg)": 10.2 * Math.pow(10, 25),
                        "radius(km)": 24764,
                        "period": 59800,
                        "temperature": 72,
                        "distance_light_year": 0.000478,
                        "host_star_mass": 1,
                        "host_star_temperature": 6000
                    };
                    break;
                default:
                    planetData = null; // Invalid planet name
            }

            if (planetData) {
                planetInfo.innerHTML = `
                <h2>${planetData.name}</h2>
                <p><strong>Mass:</strong> ${planetData["mass(kg)"]} kg</p>
                <p><strong>Radius:</strong> ${planetData["radius(km)"]} km</p>
                <p><strong>Orbital Period:</strong> ${planetData.period} days</p>
                <p><strong>Temperature:</strong> ${planetData.temperature} K</p>
                <p><strong>Distance (light-years):</strong> ${planetData.distance_light_year}</p>
                <p><strong>Host Star Mass:</strong> ${planetData.host_star_mass} Solar Masses</p>
                <p><strong>Host Star Temperature:</strong> ${planetData.host_star_temperature} K</p>
                `;
            } else {
                planetInfo.innerHTML = "Invalid planet name.";
            }
        }
    });
});