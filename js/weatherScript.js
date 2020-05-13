$(document).ready(function () {
    $("#submitBtn")


    $.ajax({
        type: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather?q=Auckland&appid=14bbe710c037e2fe867288072deabd52',
        dataType: "JSON", //data type expected from server
        success: function (data) {
            console.log(data);
            $("#locationPlace").text(data.name);
            $("#forecastPlace").text(data.weather[0].description);
            $("#tempPlace").text(data.main.temp);
            $("#windPlace").text(data.wind.speed);
            $("#icon").html("<img src='http//openweathermap.org/img/wn/"+data.weather[0].icon+".png'>");
        },
        error: function () {
            console.log('Error: ' + data);
        }
    });

});