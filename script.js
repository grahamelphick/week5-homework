$(document).ready(function () {




    var currentDate = moment().format('dddd MMMM Do');
    // console.log(currentDate)
    $("#currentDay").text(currentDate)

    // var currentHour = parseInt(moment().format("H"));
    // console.log(currentHour)

    // var calendarHour = parseInt($(".hour").data("number"))
    // console.log(calendarHour)

    // var allHours = $(".hour");
    // for (var index = 0; index < allHours.length; index++) {
    //     console.log(allHours)

    // }

    var calendarHour = $(".description").each(function (index, element) {
        // console.log(element)
        colorCode($(element));
        // console.log($(this).data("number"))

    });

    // var allHoursString = JSON.stringify(allHours)


    function colorCode($element) {
        var calendarHour = parseInt($element.data("number"));
        var currentHour = parseInt(moment().format("H"));
        console.log(currentHour);
        console.log(calendarHour);
        if (currentHour === calendarHour) {
            $element.addClass("present");
            console.log("present");
        }
        else if (currentHour > calendarHour) {
            $element.addClass("past");
            // console.log("past");
        }
        else {
            $element.addClass("future");
            // console.log("future");
        };
    }

    // inputEvent = $("#nineam.").text
    // // console.log(inputEvent)

    // $(".saveBtn").click(function () {
    //     console.log(inputEvent);
    // });


        // Save 9am
    $("#nineambtn").click(function () {
        var savedEventnineam = $("#nineamtext").val()
        var savedEventnineamString = JSON.stringify(savedEventnineam);
        localStorage.setItem("savedEventnineam", savedEventnineamString);
    });

    var retrievedEvent = localStorage.getItem("savedEventnineam");
    retrievedEvent = JSON.parse(retrievedEvent);
    $("#nineamtext").val(retrievedEvent);
    console.log(retrievedEvent);

        // Save 10am
    $("#tenambtn").click(function () {
        var savedEventtenam = $("#tenamtext").val()
        var savedEventtenamString = JSON.stringify(savedEventtenam);
        localStorage.setItem("savedEventtenam", savedEventtenamString);
    });

    var retrievedEvent = localStorage.getItem("savedEventtenam");
    retrievedEvent = JSON.parse(retrievedEvent);
    $("#tenamtext").val(retrievedEvent);
    console.log(retrievedEvent);
    
        // Save 11am
    $("#elevenambtn").click(function () {
        var savedEventelevenam = $("#elevenamtext").val()
        var savedEventelevenamString = JSON.stringify(savedEventelevenam);
        localStorage.setItem("savedEventelevenam", savedEventelevenamString);
    });

    var retrievedEvent = localStorage.getItem("savedEventelevenam");
    retrievedEvent = JSON.parse(retrievedEvent);
    $("#elevenamtext").val(retrievedEvent);
    console.log(retrievedEvent);

        // Save 12am
    $("#noonbtn").click(function () {
        var savedEventnoon = $("#noontext").val()
        var savedEventnoonString = JSON.stringify(savedEventnoon);
        localStorage.setItem("savedEventnoon", savedEventnoonString);
    });

    var retrievedEvent = localStorage.getItem("savedEventnoon");
    retrievedEvent = JSON.parse(retrievedEvent);
    $("#noontext").val(retrievedEvent);
    console.log(retrievedEvent);

        // Save 1pm
    $("#onepmbtn").click(function () {
        var savedEventonepm = $("#onepmtext").val()
        var savedEventonepmString = JSON.stringify(savedEventonepm);
        localStorage.setItem("savedEventonepm", savedEventonepmString);
    });

    var retrievedEvent = localStorage.getItem("savedEventonepm");
    retrievedEvent = JSON.parse(retrievedEvent);
    $("#onepmtext").val(retrievedEvent);
    console.log(retrievedEvent);

        // Save 2pm
    $("#twopmbtn").click(function () {
        var savedEventtwopm = $("#twopmtext").val()
        var savedEventtwopmString = JSON.stringify(savedEventtwopm);
        localStorage.setItem("savedEventtwopm", savedEventtwopmString);
    });

    var retrievedEvent = localStorage.getItem("savedEventtwopm");
    retrievedEvent = JSON.parse(retrievedEvent);
    $("#twopmtext").val(retrievedEvent);
    console.log(retrievedEvent);

        // Save 3pm
    $("#threepmbtn").click(function () {
        var savedEventthreepm = $("#threepmtext").val()
        var savedEventthreepmString = JSON.stringify(savedEventthreepm);
        localStorage.setItem("savedEventthreepm", savedEventthreepmString);
    });

    var retrievedEvent = localStorage.getItem("savedEventthreepm");
    retrievedEvent = JSON.parse(retrievedEvent);
    $("#threepmtext").val(retrievedEvent);
    console.log(retrievedEvent);

        // Save 4pm
    $("#fourpmbtn").click(function () {
        var savedEventfourpm = $("#fourpmtext").val()
        var savedEventfourpmString = JSON.stringify(savedEventfourpm);
        localStorage.setItem("savedEventfourpm", savedEventfourpmString);
    });

    var retrievedEvent = localStorage.getItem("savedEventfourpm");
    retrievedEvent = JSON.parse(retrievedEvent);
    $("#fourpmtext").val(retrievedEvent);
    console.log(retrievedEvent);

        // Save 5pm
    $("#fivepmbtn").click(function () {
        var savedEventfivepm = $("#fivepmtext").val()
        var savedEventfivepmString = JSON.stringify(savedEventfivepm);
        localStorage.setItem("savedEventfivepm", savedEventfivepmString);
    });

    var retrievedEvent = localStorage.getItem("savedEventfivepm");
    retrievedEvent = JSON.parse(retrievedEvent);
    $("#fivepmtext").val(retrievedEvent);
    console.log(retrievedEvent);

});

// var userString = JSON.stringify(user);
// console.log(user);
// localStorage.setItem("user", userString);

// // get most recent submission
// var lastUser = localStorage.getItem("user");

// lastUser = JSON.parse(lastUser);