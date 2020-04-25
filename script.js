$(document).ready(function () {

    //Moment.js
    var NowMoment = moment();

    //today's date   
    var today = NowMoment.format("dddd, MMMM Do YYYY");
    console.log(today);
    $('#displayMoment').text(today);


    // Store text area input  
    // Save button event listener & set item from local storage
    $(".save").on("click", function () {

        var userInput = $(this).siblings(".col-md-10").val();
        var timeHour = $(this).parent().attr("id");
        localStorage.setItem(timeHour, userInput);

        alert("note saved");
    });

    //get local storage
    $("#8 .col-md-10").val(localStorage.getItem("8"));
    $("#9 .col-md-10").val(localStorage.getItem("9"));
    $("#10 .col-md-10").val(localStorage.getItem("10"));
    $("#11 .col-md-10").val(localStorage.getItem("11"));
    $("#12 .col-md-10").val(localStorage.getItem("12"));
    $("#13 .col-md-10").val(localStorage.getItem("13"));
    $("#14 .col-md-10").val(localStorage.getItem("14"));
    $("#15 .col-md-10").val(localStorage.getItem("15"));
    $("#16 .col-md-10").val(localStorage.getItem("16"));
    $("#17 .col-md-10").val(localStorage.getItem("17"));


    //set time 
    // var amPM = NowMoment.format("A"); //AM or PM
    var hour = NowMoment.format("H");
    // console.log(hour); //24hr

    am8 = moment().startOf('day').add({ hours: [8] }).format('H A');
    am9 = (moment().startOf('day').add({ hours: [9] }).format('H A')),
    am10 = (moment().startOf('day').add({ hours: [10] }).format('H A')),
    am11 = (moment().startOf('day').add({ hours: [11] }).format('H A')),
    am12 = (moment().startOf('day').add({ hours: [12] }).format('H A')),
    am13 = (moment().startOf('day').add({ hours: [13] }).format('H A')),
    am14 = (moment().startOf('day').add({ hours: [14] }).format('H A')),
    am15= (moment().startOf('day').add({ hours: [15] }).format('H A')),
    am16 = (moment().startOf('day').add({ hours: [16] }).format('H A')),
    am17 = (moment().startOf('day').add({ hours: [17] }).format('H A')),
    am18 = (moment().startOf('day').add({ hours: [18] }).format('H A')),
        console.log(am8);

    $("#time8").text(am8);
    $("#time9").text(am9);
    $("#time10").text(am10);
    $("#time11").text(am11);
    $("#time12").text(am12);
    $("#time13").text(am13);
    $("#time14").text(am14);
    $("#time15").text(am15);
    $("#time16").text(am16);
    $("#time17").text(am17);
    $("#time18").text(am18);

    // updates the past, present, future
    function timeUpdate() {
        //  var hour = NowMoment.format("H");
        //  var thisHour = parseInt($(this).parent().attr("id"));
        var thisHour = parseInt($(this).parent().attr("id"));
        //console.log(thisHour);

        $(".calendar-row").each(function () {
            if (thisHour < hour) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            } else if (thisHour === hour) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            } else {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
        })
    }

    //updates time every sec
    setInterval(() => {
        timeUpdate()
    }, 1000);

});