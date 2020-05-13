$(document).ready(function () {

    $.ajax({
        type: 'GET',
        url: 'https://djanjorestframestudy.herokuapp.com/api/leads/',
        dataType: "JSON", //data type expected from server
        success: function (data) {
            console.log(data);
            i = 0;
            while (i < data.length){
                person = data[i];
                $("#records").append("<tr>" +
                    "<td>"+person.id+"</td>" +
                    "<td>"+person.name+"</td>" +
                    "<td>"+person.email+"</td>" +
                    "<td>"+person.message+"</td>" +
                    "<td><button class='showPerson' personID='"+person.id+"'>Show</button></td>" +
                    "</tr>");
                i = i+1;
            }
            $(".showPerson").click(function () {
                personID = $(this).attr("personID");
                $.ajax({
                    type: 'GET',
                    url:'https://djanjorestframestudy.herokuapp.com/api/leads/'+personID+'/',
                    success: function (data) {
                        console.log(data);
                        $("#personInfo").empty();
                        $("#personInfo").append("" +
                            "<p>ID: "+data.id+"</p>" +
                            "<p>Name: "+data.name+"</p>" +
                            "<p>Email: "+data.email+"</p>" +
                            "<p>Message: "+data.message+"</p>" +
                        "");
                    },
                    error: function () {
                        alert("error");
                    }
                })

            });
        },
        error: function () {
            console.log('Error: ' + data);

        }
    });
});