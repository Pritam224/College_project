export const takeInputFormData = () => {
  let formData = JSON.parse(localStorage.getItem("formData")) ?? [];
  let addBtn = document.getElementById("addBtn");
  addBtn.addEventListener("click", function (e) {
    let roomId = document.getElementById("roomId").value;
    let roomType = document.getElementById("roomType").value;
    let roomLocation = document.getElementById("roomLocation").value;
    let roomCharge = document.getElementById("roomCharge").value;

    let myFormData = {
      roomId,
      roomType,
      roomLocation,
      roomCharge,
    };

    formData.push(myFormData);
    localStorage.setItem("formData", JSON.stringify(formData));
    window.location.href = "adminformdata.html";
  });
};

export const showFormData = () => {
  let formData = JSON.parse(localStorage.getItem("formData"));
  let formValuesElm = document.getElementById("formValues");

  if (formData?.length >= 1) {
    let html = "";
    formData.forEach(function (element) {
      html += `<tr>
                 <td>${element.roomId}</td>
                 <td>${element.roomType}</td>
                 <td>${element.roomLocation}</td>
                 <td>${element.roomCharge}</td>
                 <td><button>Edit</button></td>
                 <td><button>Delete</button></td>
                </tr>`;
    });
    formValuesElm.innerHTML = html;
  } else {
    let html = "You don't have any data to show";
    formValuesElm.innerHTML = html;
  }
};
