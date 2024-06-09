document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPassword").value;
  if (localStorage.getItem(user) === pass) {
      alert("Hello, " + user + "!");
      console.log(localStorage.getItem(user));
      window.location.href = "home.html";
  } else {
      alert("Wrong password or user not found");
      console.log(localStorage.getItem(user), pass);
  }
});
