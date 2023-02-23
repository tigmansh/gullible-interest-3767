function onLogin() {
  const payload = {
    email: document.getElementById("email").value,
    pass: document.getElementById("password").value,
  };
  if (!payload.email || !payload.pass) {
    swal("Error 404 🤖", "All the fields are required", "error");
  } else {
    fetch("https://good-pink-narwhal-garb.cyclic.app/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg && res.token) {
          localStorage.setItem("token", res.token);
          swal("Greetings 🤝", res.msg, "success");
          document.getElementById("form").reset();

          setTimeout(function () {
            window.location.href = "userBookings.html";
          }, 4000);
        } else {
          swal("Ohh no 😔", res.err, "error");
          document.getElementById("form").reset();
        }
      })
      .catch((err) => console.log(err));
  }
}
