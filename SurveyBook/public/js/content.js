$(document).ready(function() {
    $("#addtext").click(function() {
        var textElement = new TextPanel();
        textElement.setTitle("Foo Bar");
        textElement.setContent("Lorem Ipsum Dolor Sit Amet");
        $("#content").append(textElement.createElement());
    });

    $("#addlongtext").click(function() {
    });

    $("#addlist").click(function() {
    });

    $("#addselect").click(function() {
    });
});
