$(document).ready(function () {




    var currentDate = moment().format('dddd MMMM Do');
    console.log(currentDate)
    $("#currentDay").text(currentDate)

    currentHour = parseInt(moment().format("H"));
    console.log(currentHour)

    calendarHour = parseInt($(".hour").data("number"))
    console.log(calendarHour)



    // array.forEach(getCalendarHour) {

    //     function getCalendarHour() {
    //         parseInt($(".hour").data("number"))
    //         console.log(calendarHour)
    //     }
        
    // });

    // if (currentHour = calendarHour) {
    //     $(".description").addClass("present");
    // }
    // else if (currentHour > calendarHour) {
    //     $(".description").addClass("past");
    // }
    // else if (currentHour < calendarHour){
    //     $(".description").addClass("future");
    // };

    if (currentHour = calendarHour) {
        $(".description").addClass("present");
    }
    else if (currentHour > calendarHour) {
        $(".description").addClass("past");
    }
    else if (currentHour < calendarHour) {
        $(".description").addClass("future");
    };


    // inputEvent = $("#nineam.").text
    // // console.log(inputEvent)

    // $(".saveBtn").click(function () {
    //     console.log(inputEvent);
    // });

    // localStorage.setItem($(".description").text, JSON.stringify())

    // var savedEvent = 
});