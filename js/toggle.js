// Password show/hide mechanism

function togglePass(event) {
  var element = document.getElementById("login-pass"),
    icon = document.getElementById("passhide");

  if (element.type === "password") {
    element.type = "text";

    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    element.type = "password";

    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
}
