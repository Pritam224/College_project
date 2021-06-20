const showFormData = () => {
  let formData = JSON.parse(localStorage.getItem("formData"));
  let formValuesElm = document.getElementById("formValues");

  if (formData?.length >= 1) {
    let html = "";
    formData.forEach(function (element, index) {
      html += `<tr>
      <td>${element.roomId}</td>
      <td>${element.roomType}</td>
      <td>${element.roomLocation}</td>
      <td>${element.roomCharge}</td>
      <td><button>Edit</button></td>
      <td> <button id = "${index}" onclick="deleteData(this.id)">
      Delete
      </button> </td>
      </tr>`;
    });
    formValuesElm.innerHTML = html;
  } else {
    let html = "You don't have any data to show";
    formValuesElm.innerHTML = html;
  }
};

showFormData();

const deleteData = (index) => {
  let formData = JSON.parse(localStorage.getItem("formData"));
  formData.splice(index, 1);
  localStorage.setItem("formData", JSON.stringify(formData));
  showFormData();
};
