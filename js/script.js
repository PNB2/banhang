function frmValidation(event) {
  event.preventDefault(); // Ngăn form submit

  // Lấy dữ liệu từ form
  const name = document.getElementById("inputName").value.trim();
  const phone = document.getElementById("inputphone").value.trim();
  const email = document.getElementById("inputEmail").value.trim();
  const note = document.getElementById("exampleFormControlTextarea1").value.trim();

  // Lấy giới tính được chọn
  const gender = document.querySelector('input[name="gridRadios"]:checked')?.nextElementSibling.textContent.trim();

  // Kiểm tra cơ bản
  if (!name || !phone || !note) {
    alert("Vui lòng điền đầy đủ thông tin bắt buộc (Tên, SĐT, Ghi chú).");
    return;
  }

  // Thêm dòng mới vào bảng
  const tableBody = document.querySelector("#myTable tbody");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${name}</td>
    <td>${phone}</td>
    <td>${email}</td>
    <td>${note}</td>
    <td>${gender}</td>
  `;

  tableBody.appendChild(newRow);

  // Xóa nội dung form
  document.getElementById("myform").reset();
}
