var AdminUserData = JSON.parse(localStorage.getItem("AdminUserData"));
let tbody = document.getElementById("tbody");
let table = document.getElementById("table");
let heading = document.getElementById("heading");

if(AdminUserData.length > 0){
    showTable(AdminUserData);
}
else {
    heading.innerHTML = null;
    heading.textContent = "No Users Yet !"
}

function showTable(data) {
  data.forEach((item) => {
    let row = document.createElement("tr");
    row.setAttribute("id", "row");

    let td1 = document.createElement("td");
    td1.textContent = item.country;

    let td2 = document.createElement("td");
    td2.textContent = `${item.firstname} ${item.lastname}`;

    let td3 = document.createElement("td");
    td3.textContent = item.age;

    let td4 = document.createElement("td");
    td4.textContent = item.mobile;

    let td5 = document.createElement("td");
    td5.textContent = item.email;

    let td6 = document.createElement("td");
    td6.textContent = item.address;

    let td7 = document.createElement("td");
    td7.textContent = item.zipcode;

    row.append(td1, td2, td3, td4, td5, td6, td7);
    tbody.append(row);
  });
}
