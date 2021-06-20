import { showFormData, takeInputFormData } from "./helper.js";

if (window.location.href === "http://127.0.0.1:5500/html/adminformdata.html") {
  showFormData();
}

if (window.location.href === "http://127.0.0.1:5500/html/createRoom.html") {
  takeInputFormData();
}
