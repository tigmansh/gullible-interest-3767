var AdminUserData = JSON.parse(localStorage.getItem("AdminUserData"));
let tbody = document.getElementById("tbody");
let table = document.getElementById("table");
let heading = document.getElementById("heading");

if(AdminUserData.length > 0){
    showTable(AdminUserData);
}
else {
    heading.innerHTML = null;
    heading.textContent = "No Bookings Yet !"
}

function showTable(data) {
  data.forEach((item) => {
    let row = document.createElement("tr");
    row.setAttribute("id", "row");
    
    let td1 = document.createElement("td");
    td1.textContent = item.start_location;

    let td2 = document.createElement("td");
    td2.textContent = item.end_location;

    let td3 = document.createElement("td");
    td3.textContent = item.start_date;

    let td4 = document.createElement("td");
    td4.textContent = item.end_date;

    let td5 = document.createElement("td");
    td5.textContent = item.vechile_type;

    row.append(td1, td2, td3, td4, td5);
    tbody.append(row);
  });
}
