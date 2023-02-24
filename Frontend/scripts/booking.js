var token = localStorage.getItem("token");
let tbody = document.getElementById("tbody");
let table = document.getElementById("table");
// let editData = JSON.parse(localStorage.getItem("editing")) || null;
fetch("https://good-pink-narwhal-garb.cyclic.app/bookings",{
    headers: {
        "Content-type": "application/json",
        "Authorization": token,
      }
}).then((res)=> res.json())
.then((res)=> {
    if(typeof(res.msg) == "object") {
        showTable(res.msg)
    }
    else {
        table.innerHTML = null;
        let response = document.createElement("h2");
        response.textContent = res.msg
        table.append(response);
    }
})
.catch((err)=>console.log(err))


function showTable(data){

    data.forEach((item)=>{
        let row = document.createElement("tr");
        let td1=  document.createElement("td")
        td1.textContent = item.start_location;
        let td2=  document.createElement("td")
        td2.textContent = item.end_location;

        let td3=  document.createElement("td")
        td3.textContent = item.start_date;

        let td4=  document.createElement("td")
        td4.textContent = item.end_date;

        let td5=  document.createElement("td")
        td5.textContent = item.vechile_type;

        let td6=  document.createElement("td")
        let edit_btn = document.createElement("button");
        td6.setAttribute("id","edit")
        edit_btn.addEventListener("click", ()=>{
            localStorage.setItem("editing", JSON.stringify(item));
            window.location.href="editBookings.html";
        })
        edit_btn.textContent = "Edit";
        td6.append(edit_btn);
        let td7=  document.createElement("td")
        td7.setAttribute("id","dlt");
        let dlt_btn = document.createElement("button");
        dlt_btn.textContent = "Delete";
        td7.append(dlt_btn);
        row.append(td1,td2,td3,td4,td5,td6,td7);
        tbody.append(row);
    })
}