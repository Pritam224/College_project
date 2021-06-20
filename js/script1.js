const takeInputFormData = () => {
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
