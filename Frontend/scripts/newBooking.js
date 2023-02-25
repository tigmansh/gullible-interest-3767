var token = localStorage.getItem("token");
var errorSound = document.getElementById("error-sound");
var successSound = document.getElementById("success-sound");

function onCreate() {
  const payload = {
    start_location: document.getElementById("start_location").value,

    end_location: document.getElementById("end_location").value,

    start_date: document.getElementById("start_date").value,

    end_date: document.getElementById("end_date").value,

    vechile_type: document.getElementById("country").value,
  };

  if (
    !payload.start_location ||
    !payload.end_date ||
    !payload.start_date ||
    !payload.end_location ||
    !payload.vechile_type
  ) {
    errorSound.play();
    swal("Error 404 🤖", "All the fields are required", "error");
  } else {
    fetch("https://good-pink-narwhal-garb.cyclic.app/bookings/dobooking", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.msg) {
          successSound.play();
          swal("We Are Excited To Serve You", res.msg, "success");
          document.getElementById("form").reset();

          setTimeout(function () {
            window.location.href = "userBookings.html";
          }, 3000);
        } else {
          errorSound.play();
          swal("Sorry 😔", res.err, "error");
          document.getElementById("form").reset();
        }
      })
      .catch((err) => console.log(err));
  }
}
