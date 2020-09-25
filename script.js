$(document).ready(function () {


    colorCode()


    var currentDate = moment().format('dddd MMMM Do');
    console.log(currentDate)
    $("#currentDay").text(currentDate)

    var currentHour = parseInt(moment().format("H"));
    console.log(currentHour)

    // var calendarHour = parseInt($(".hour").data("number"))
    // console.log(calendarHour)

    // var allHours = $(".hour");
    // for (var index = 0; index < allHours.length; index++) {
    //     console.log(allHours)

    // }

    var calendarHour = $(".hour").each(function (index, element) {
        console.log($(this).data("number"))
    });

    // var allHoursString = JSON.stringify(allHours)


    function colorCode() {
        if (currentHour === calendarHour) {
            $(".description").addClass("present");
            console.log("present");
        }
        else if (currentHour > calendarHour) {
            $(".description").addClass("past");
            console.log("past");
        }
        else if (currentHour < calendarHour) {
            $(".description").addClass("future");
            console.log("future");
        };
    }

    // inputEvent = $("#nineam.").text
    // // console.log(inputEvent)

    // $(".saveBtn").click(function () {
    //     console.log(inputEvent);
    // });

    var savedEvent = $("#nineamtext").text
    var savedEventString = JSON.stringify(savedEvent);

    $("#nineambtn").click(function () {
        localStorage.setItem("savedEvent", savedEventString)

    });
    var retrievedEvent = localStorage.getItem("savedEvent")
    retrievedEvent = JSON.parse(retrievedEvent);
    $("#nineamtext").text = retrievedEvent;
    console.log(retrievedEvent);


});

// var userString = JSON.stringify(user);
// console.log(user);
// localStorage.setItem("user", userString);

// // get most recent submission
// var lastUser = localStorage.getItem("user");

// lastUser = JSON.parse(lastUser);