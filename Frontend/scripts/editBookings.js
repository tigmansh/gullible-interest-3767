var token = localStorage.getItem("token");
var errorSound = document.getElementById("error-sound");
var successSound = document.getElementById("success-sound");

let editData = JSON.parse(localStorage.getItem("editing"));

document.getElementById("start_location").value = editData.start_location;

document.getElementById("end_location").value = editData.end_location;

function onSave() {
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
    fetch(
      `https://good-pink-narwhal-garb.cyclic.app/bookings/update/${editData._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.msg) {
          successSound.play();
          swal("We Got You", res.msg, "success");
          document.getElementById("form").reset();

          setTimeout(function () {
            window.location.href = "userBookings.html";
          }, 2000);
        } else {
          errorSound.play();
          swal("Ohh no 😔", res.err, "error");
          document.getElementById("form").reset();
        }
      })
      .catch((err) => console.log(err));
  }
}