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
          swal("Hooray 🎉", res.msg, "success");
          document.getElementById("form").reset();

          setTimeout(function () {
            window.location.href = "login.html";
          }, 2000);
        } else {
          swal("Ohh no 😔", res.err, "error");
          document.getElementById("form").reset();
        }
      })
      .catch((err) => console.log(err));
  }
}
