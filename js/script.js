showFormData();

var formData = [];
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  console.log("HELLL");
  let roomId = document.getElementById("roomId").value;
  let roomType = document.getElementById("roomType").value;
  let roomLocation = document.getElementById("roomLocation").value;
  let roomCharge = document.getElementById("roomCharge").value;

  myFormData = {
    roomId,
    roomType,
    roomLocation,
    roomCharge,
  };

  formData.push(myFormData);

  localStorage.setItem("formData", JSON.stringify(formData));

  roomId.value = "";
  roomType.value = "";
  roomLocation.value = "";
  roomCharge.value = "";
  // showFormData();
});

function showFormData() {
  let formData = JSON.parse(localStorage.getItem("formData"));
  console.log("SHOWFORMDATA ", formData);
  let formValuesElm = document.getElementById("formValues");

  if (formData?.length >= 1) {
    let html = "";
    formData.forEach(function (element) {
      html += `<tr>
               <td>${element.roomId}</td>
               <td>${element.roomType}</td>
               <td>${element.roomLocation}</td>
               <td>${element.roomCharge}</td>
              </tr>`;
    });
    formValuesElm.innerHTML = html;
  } else {
    let html = "Yoy don't have any data to show";
    formValuesElm.innerHTML = html;
  }
}
