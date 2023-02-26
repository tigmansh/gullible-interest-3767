var errorSound = document.getElementById("error-sound");
var successSound = document.getElementById("success-sound");

const togglePassword = document.querySelector(".toggle-password");
const password = document.getElementById("password");

togglePassword.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.classList.toggle("hide-password");
  if (type === "password") {
    this.style.backgroundImage = `url('https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-eye-512.png')`;
  } else {
    this.style.backgroundImage = `url('https://cdn.iconscout.com/icon/premium/png-256-thumb/red-eye-1627576-1379630.png?f=webp&w=256')`;
  }
});

function onSignup() {
  const payload = {
    country: document.getElementById("country").value,
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    age: document.getElementById("age").value,
    mobile: document.getElementById("mobile").value,
    email: document.getElementById("email").value,
    pass: document.getElementById("password").value,
    address: document.getElementById("address").value,
    zipcode: document.getElementById("zipcode").value,
  };

  if (
    !payload.country ||
    !payload.firstname ||
    !payload.lastname ||
    !payload.age ||
    !payload.mobile ||
    !payload.email ||
    !payload.pass ||
    !payload.address ||
    !payload.zipcode
  ) {
    errorSound.play();
    swal("Error 404 🤖", "All the fields are required", "error");
  } else {
    fetch("https://good-pink-narwhal-garb.cyclic.app/users/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg) {
          successSound.play();
          swal("Hooray 🎉", res.msg, "success");
          document.getElementById("form").reset();

          setTimeout(function () {
            window.location.href = "login.html";
          }, 2000);
        } else {
          errorSound.play();
          swal("Ohh no 😔", res.err, "error");
          document.getElementById("email").reset();
          document.getElementById("password").reset();
        }
      })
      .catch((err) => console.log(err));
  }
}
