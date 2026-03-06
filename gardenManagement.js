const temperature = 90
const timeOfDay = "morning "
let soilMoisture = 30

if (temperature> 80) {
    console.log("Watering on");
} else {
    console.log("Watering off");
}

if (timeOfDay === "morning") {
    console.log("Lights on");
} else {
    console.log("Lights off");
}
soilMoisture = 0

while (soilMoisture < 40) {
    soilMoisture += 5;
    console.log(soilMoisture);
}

