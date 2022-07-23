function attachEventsListeners() {
    let toConvert = 0;
    let days = document.getElementById("days");
    let daysBtnInput = document.getElementById("daysBtn");
    let daysConverted = 0;
    let hours = document.getElementById("hours");
    let hoursBtnInput = document.getElementById("hoursBtn");
    let hoursConverted = 0;
    let minutes = document.getElementById("minutes");
    let minutesBtnInput = document.getElementById("minutesBtn");
    let minutesConverted = 0;
    let seconds = document.getElementById("seconds");
    let secondsBtnInput = document.getElementById("secondsBtn");
    let secondsConverted = 0;

    daysBtnInput.addEventListener("click", convertDays);

    function convertDays() {
        toConvert = days.value;
        hoursConverted = toConvert * 24;
        minutesConverted = toConvert * 1440;
        secondsConverted = toConvert * 86400;
        hours.value = hoursConverted;
        minutes.value = minutesConverted;
        seconds.value = secondsConverted;
    }
    hoursBtnInput.addEventListener("click", convertHours);

    function convertHours() {
        toConvert = hours.value;
        daysConverted = toConvert / 24;
        minutesConverted = toConvert * 60;
        secondsConverted = toConvert * 3600;
        days.value = daysConverted;
        minutes.value = minutesConverted;
        seconds.value = secondsConverted;
    }
    minutesBtnInput.addEventListener("click", convertMinutes);

    function convertMinutes() {
        toConvert = minutes.value;
        daysConverted = toConvert / 1440;
        hoursConverted = toConvert / 60;
        secondsConverted = toConvert * 60;
        days.value = daysConverted;
        hours.value = hoursConverted;
        seconds.value = secondsConverted;
    }
    secondsBtnInput.addEventListener("click", convertSeconds);

    function convertSeconds() {
        toConvert = seconds.value;
        daysConverted = toConvert / 86400;
        hoursConverted = toConvert / 3600;
        minutesConverted = toConvert / 60;
        days.value = daysConverted;
        hours.value = hoursConverted;
        minutes.value = minutesConverted;
    }
}