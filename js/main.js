//form validation
$(document).ready(function () {
  var firstNameError = true,
    lastNameError = true,
    mailError = true;
  termsError = true;
  $("#first_name").blur(function () {
    if ($(this).val().length > 20) {
      $(this).css("border", "1px solid #f00");
      $(this)
        .parent()
        .find(".error_msg")
        .fadeIn(200)
        .text("First Name must be less than 20 Chr");
      firstNameError = true;
    } else if ($(this).val().length >= 1 && $(this).val().length <= 3) {
      $(this).css("border", "1px solid #f00");
      $(this)
        .parent()
        .find(".error_msg")
        .fadeIn(200)
        .text("First Name is too short");
      firstNameError = true;
    } else if ($(this).val().length <= 0) {
      $(this).css("border", "1px solid #f00");
      $(this)
        .parent()
        .find(".error_msg")
        .fadeIn(200)
        .text("First Name is required");
      firstNameError = true;
    } else {
      $(this).css("border", "1px solid #080");

      $(this).parent().find(".error_msg").fadeOut(200);
      firstNameError = false;
    }
  });

  $("#last_name").blur(function () {
    if ($(this).val().length > 1 && $(this).val().length <= 3) {
      $(this).css("border", "1px solid #f00");
      $(this)
        .parent()
        .find(".error_msg")
        .fadeIn(200)
        .text("Last Name is too short");
      lastNameError = true;
    } else if ($(this).val().length <= 0) {
      $(this).css("border", "1px solid #f00");
      $(this)
        .parent()
        .find(".error_msg")
        .fadeIn(200)
        .text("Last Name is required");
      lastNameError = true;
    } else if ($(this).val().length > 20) {
      $(this).css("border", "1px solid #f00");
      $(this)
        .parent()
        .find(".error_msg")
        .fadeIn(200)
        .text("Last Name must be less than 20 Chr");
      lastNameError = true;
    } else {
      $(this).css("border", "1px solid #080");

      $(this).parent().find(".error_msg").fadeOut(200);
      lastNameError = false;
    }
  });
  $("#email").blur(function () {
    if ($(this).val().length == "") {
      $(this).css("border", "1px solid #f00");

      $(this).parent().find(".error_msg").fadeIn(200).text("Email is Required");
      mailError = true;
    }  else {
      $(this).css("border", "1px solid #080");
      $(this).parent().find(".error_msg").fadeOut(200);
      mailError = false;
    }
  });

  $(".form").submit(function (e) {
    $terms = $('#terms');
    if (!$(this).is(":checked")) {
      $(this)
        .parent()
        .find(".error_msg")
        .fadeIn(200)
        .text("You must accept our terms and conditions");
    }
    if (
      firstNameError === true ||
      lastNameError === true ||
      mailError === true ||
      msgError === true
    ) {
      e.preventDefault();

      $("#email , #last_name ,#first_name ").blur();
    }
  });
});
