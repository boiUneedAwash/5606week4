$(document).ready(function () {
    $("#Toggle").click(function () {
        $("#demo").toggle("slow");
    });

    $("#FadeIn").click(function () {
        $("#demo").fadeIn("slow");
    });

    $("#enlarge").mouseenter(function () {
        $("#demo").animate({width: "250px", height: "250px"});
    });

    $("#enlarge").mouseleave(function () {
        $("#demo").animate({width: "100px", height: "100px"});
    });

    $("#slide").click(function () {
        $("#forslide").slideDown(2000).slideUp(2000).slideDown(2000)
    });

    $("#changeTextValue").click(function () {
        currentText = $("#changeTextHere").text(); //collect current text in paragraph
        alert("Current Text: " + currentText); //show it up in popup
        $("#changeTextHere").text("Hello James"); //change the text in paragraph
        currentValue = $("#changeValueHere").val(); //collect current value in input box
        alert("Current Value: "+currentValue); // show it in popup
        $("#changeValueHere").val("Hello Song");//
    });

    $("#addHTMLToTable").click(function () {
        alert($("#demoTable").html() ); //collect html code in my element
        $("#demoTable").html("<tr><td>James Tiller</td><td>Age</td><td>Gender</td>" +
            "<tr><td>James Tiller 2</td><td>17</td><td>Male</td></tr>");
    });

    $("#showAttrOfTable").click( function () {
        alert( $("#demoTable").attr("price") );
        alert( $("#demoTable").attr("age") );
        alert( $("#demoTable").attr("attr1") );
    });

    $("#appendBtn").click(function () {
        $("#demoTable").append("<tr><td>James Tiller</td><td>17</td><td>Male</td>");
    });

    $("#prependBtn").click(function () {
        $("#demoTable").append("<tr><td>James Tiller</td><td>17</td><td>Male</td>");
    });

    $("#addBeforeHeading").click(function () {
        $("#tableHeading").before("<tr><td>Before</td><td>17</td><td>Male</td>");
    });

    $("#addAfterHeading").click(function () {
        $("#tableHeading").after("<tr><td>After</td><td>17</td><td>Male</td>");
    });

    $("#removeHeading").click(function () {
        $("#tableHeading").remove();
    });

    $("#emptyTable").click(function () {
        $("#demoTable").empty();
    });

    $("#addClass").click(function () {
        $("#demoTable").addClass("table1")
    });
});