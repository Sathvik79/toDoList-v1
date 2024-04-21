exports.getDate = function () {

    // const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // var today = new Date();
    // var currentDay = today.getDay();
    // let day = weekday[currentDay];

    const event = new Date();
    const options = {
        weekday: 'long',
        // year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    let day = event.toLocaleDateString("en-US", options);

    return day;
};


exports.getDay = function () {
    const event = new Date();
    const options = {
        weekday: 'long',
    };

    return event.toLocaleDateString("en-US", options);
};