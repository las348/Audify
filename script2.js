 var input9AM = $("#textarea9AM");
    var input10AM = $("#textarea10AM");
    var input11AM = $("#textarea11AM");
    var input12PM = $("#textarea12PM");
    var input1PM = $("#textarea1PM");
    var input2PM = $("#textarea2PM");
    var input3PM = $("#textarea3PM");
    var input4PM = $("#textarea4PM");
    var input5PM = $("#textarea5PM");
    
    function updateTime() {
        var date = moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#currentDay").text(date);
    }
    setInterval(updateTime, 1000);
    
    var currentHour = parseInt(moment().format('HH'));

    $("textarea").each(function() {
        var now = parseInt($(this).attr("name"));
        if (now < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        if (now > currentHour) {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
        if (now === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
    });

    $("button").on("click", function() {
        localStorage.setItem("9AM", (input9AM.val()));
        localStorage.setItem("10AM", (input10AM.val()));
        localStorage.setItem("11AM", (input11AM.val()));
        localStorage.setItem("12PM", (input12PM.val()));
        localStorage.setItem("1PM", (input1PM.val()));
        localStorage.setItem("2PM", (input2PM.val()));
        localStorage.setItem("3PM", (input3PM.val()));
        localStorage.setItem("4PM", (input4PM.val()));
        localStorage.setItem("5PM", (input5PM.val()));
    })

    $("#textarea9AM").append(localStorage.getItem("9AM"));
    $("#textarea10AM").append(localStorage.getItem("10AM"));
    $("#textarea11AM").append(localStorage.getItem("11AM"));
    $("#textarea12PM").append(localStorage.getItem("12PM"));
    $("#textarea1PM").append(localStorage.getItem("1PM"));
    $("#textarea2PM").append(localStorage.getItem("2PM"));
    $("#textarea3PM").append(localStorage.getItem("3PM"));
    $("#textarea4PM").append(localStorage.getItem("4PM"));
    $("#textarea5PM").append(localStorage.getItem("5PM"));
})