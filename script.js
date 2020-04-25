$(document).ready(function () {

    //Moment.js
    var NowMoment = moment();

    //today's date   
    var today = NowMoment.format("dddd, MMMM Do YYYY");
    console.log(today);
    $('#displayMoment').text(today);


    // Save button event listener & set text area input to local storage
    $(".save").on("click", function () {

        var userInput = $(this).siblings(".col-md-10").val();
        var timeHour = $(this).parent().attr("id");
        localStorage.setItem(timeHour, userInput);

        alert("note saved");
    });

    //Retrieve from local storage
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

    // coordinates the colors to past, present, future
    function timeUpdate() {
        var hour = NowMoment.format("H");

        $("textarea").each(function () {

            var thisHour = parseInt($(this).parent().attr("id"));
            //console.log(thisHour);

            if (thisHour < hour) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            } else if (thisHour == hour) {
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