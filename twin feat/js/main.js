$(function() {
    //select all new links and respond to their click
    $("nav > a").click(function () {
    //the code that will execute when a navlink is clicked 
    //$(this) means the element which was clicked from above,
    //in our case which link was clicked. We use the jQuery function
    //attr to get the indicated attricute
        let target = $(this).attr("href");
        //find the element current with the show class, then remove
        //that class so that it hides
        $(".show").removeClass("show");
        //take the target page we captured above and add the show class
        //so that it slides into view
        $("target").addClass("show");
    })
})