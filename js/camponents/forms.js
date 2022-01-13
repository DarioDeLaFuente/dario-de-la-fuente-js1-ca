const formpassed = document.querySelector(".form-passed");

function validate(event) {
  event.preventDefault();
  let passed = true;
  let name = document.forms["contactForm"]["name"].value;
  let subject = document.forms["contactForm"]["subject"].value;
  let email = document.forms["contactForm"]["email"].value;
  let address = document.forms["contactForm"]["address"].value;

  if (name.trim() == "") {
    document.querySelectorAll("#name + .validate-message")[0].innerHTML =
      displayFormError("A name is required");
    passed = false;
  }
  if (subject.trim().length <= 10) {
    document.querySelectorAll("#subject + .validate-message")[0].innerHTML = displayFormError(
      "* Must have a value with a minimum length of 10"
    );
    passed = false;
  }
  if (email.trim() == "") {
    document.querySelectorAll("#email + .validate-message")[0].innerHTML = displayFormError(
      "* Must have a value email"
    );
    passed = false;
  }

  if (address.trim().length <= 25) {
    document.querySelectorAll("#address + .validate-message")[0].innerHTML = displayFormError(
      "* Must have a value with a minimum length of 25"
    );
    passed = false;
  }
  if (passed) {
    document.querySelector(".form-container").style.display = "none";
    formpassed.innerHTML = displayFormSuccess(
      "THANK YOU FOR SUBSCRIBEING TO THE (Replacement Dimension)!"
    );
  }
}
