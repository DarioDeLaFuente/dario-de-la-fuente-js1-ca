function displayError(errorMessage = "Api unknown error") {
  return `<div class="error"><div class="error-info">${errorMessage}</div></div>`;
}
function displayFormError(formErrorMessage = "Form unknown error") {
  return `<div class="form-error"><div class="form-error-info">${formErrorMessage}</div></div>`;
}
function displayFormSuccess(formSuccessMessage = "SuccessMessage") {
  return `<div class=""><div class="success-message-text">${formSuccessMessage}</div><div class="success-message-conteiner"><a href="index.html" class="button">RETURN TO EARTH</a></div></div>`;
}
