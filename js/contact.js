$(function () {
    addFormHtml();
})
function addFormHtml () {
    let form = $("<form></form>");
    $("<h2></h2>").text("Contact us!").appendTo(form);
    $("<input>").attr("type", "text").attr("placeholder", "Firstname").attr("name", "firstName").prop("required", true).appendTo(form);
    $("<input>").attr("type", "text").attr("placeholder", "Lastname").attr("name", "lastName").prop("required", true).appendTo(form);
    $("<input>").attr("type", "email").attr("placeholder", "Email").attr("name", "email").prop("required", true).appendTo(form);

    $("<textarea></textarea>").attr("rows", "5").attr("cols", "60").attr("placeholder", "What would you like to tell us?").attr("name", "message").prop("required", true).appendTo(form);
    let buttonContainer = $("<div></div>");
    $("<button></button>").attr("type", "button").attr("id", "sendButton").text("Send!").on('click', () => {
        let firstname = $("input[name = 'firstName']").val();
        let lastname = $("input[name = 'lastName']").val();
        let email = $("input[name = 'email']").val();
        if (firstname == '' || lastname == '' || email == '' || $("textarea").val() == '') {
            $("form > input").addClass("fail");
            $("form > textarea").addClass("fail");
        } else {
            $("#formcontainer").html(" ");
            let container = $("<div></div>").attr("id", "thankYouDiv");
            $("<h2></h2>").html("Hey "+ firstname + " " + lastname + ", we are so glad to recieve your feedback and we will contact you at <i>"+ email + "</i> !").appendTo(container);
            container.appendTo($("#formcontainer"));
        }
        
    }).appendTo(buttonContainer);
    $("<button></button>").attr("type", "reset").attr("id", "resetButton").text("Reset").appendTo(buttonContainer);
    buttonContainer.appendTo(form);
    form.appendTo($("#formcontainer"));

}