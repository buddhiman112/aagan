$(document).ready(function () {
    $(".invisible-content").hide();
    $(document).on('click', "#butn", function () {
        var moreLessButton = $(".invisible-content").is(".visible")? 'Read More' : 'Read Less';
        $(this).text(moreLessButton);
        $(this).parent(".topic").find(".invisible-content").toggle()
        $(this).parent(".topic").find(".visible-content").toggle()

    })
});
