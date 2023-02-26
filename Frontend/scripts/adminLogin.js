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

function onAdminLogin() {
  const payload = {
    email: document.getElementById("email").value,
    pass: document.getElementById("password").value,
    dataType: document.getElementById("country").value, 
  };
  if (!payload.email || !payload.pass || !payload.dataType) {
    errorSound.play();
    swal("Error 404 🤖", "All the fields are required", "error");
  } else {
    fetch(`https://good-pink-narwhal-garb.cyclic.app/admin/${payload.dataType}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        if(res.msg){

            localStorage.setItem("AdminUserData", JSON.stringify(res.msg));

            successSound.play();
            swal("Greetings 🤝", "Welcome Admin", "success");

            document.getElementById("form").reset();

            setTimeout(function () {
              if(payload.dataType === "users") {
                window.location.href = "AdminUserData.html";
              }
              else {
                window.location.href = "adminBookingData.html";
              }
            }, 3000);
        }
        else {
            errorSound.play();
            swal("Ohh no 😔", res.err, "error");
          }
      })
      .catch((err) => console.log(err));
  }
}
