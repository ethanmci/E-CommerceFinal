//script for the header

$('#mobile-dropdown').hide();
$('#dropdown').hide();
$('#dropdown-toggle').hover(
    function () {
        console.log("Opening hidden menu");
        $('#dropdown').slideDown(200);
    },
    function () {
        console.log("Closing hidden menu");
        $('#dropdown').slideUp(300);
    }
);

$('#MDB_dropdown').hide();
$('#MDB_dropdown-toggle').hover(
    function () {
        console.log("Opening hidden menu");
        $('#MDB_dropdown').slideDown(200);
    },
    function () {
        console.log("Closing hidden menu");
        $('#MDB_dropdown').slideUp(300);
    }
);

//function for mobile menu dropdown animation
$(function () {
    //linking the 2 key html elements to variables
    var mobileDrop = $('#mobile-dropdown');
    var hamMenu = $('#hamburger-menu-btn');
    //code to be
    hamMenu.click(function () {
        console.log("Opening hamburger menu");
        if ($(this).find($(".fas")).hasClass('fa-bars')) {
            console.log("Found");
            //replacing the hamburger menu icon with an "x" icon
            $(this).find($(".fas")).removeClass('fa-bars').addClass('fa-times');
            //background changes to red
            $(this).css("background-color", "tomato");
        } else if ($(this).find($(".fas")).hasClass('fa-times')) {
            console.log("Found");
            //replacing the "x" icon with the hamburger
            $(this).find($(".fas")).removeClass('fa-times').addClass('fa-bars');
            //resetting the background colour to default (black)
            $(this).css("background-color", "black");
        } else {
            //else statement if something unexpected happens
            console.log("unexpected error!");
        }
        //toggle slide jquery animation
        mobileDrop.slideToggle(250);

    });
});