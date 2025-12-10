function chia() {
  // 1. Gọi hàm giả định để lấy đầu vào a và b
  const input = getInputs();
  
  // Kiểm tra nếu đầu vào không hợp lệ (ví dụ: không phải số)
  if (!input) return;

  // 2. Kiểm tra trường hợp chia cho 0
  if (input.b === 0) {
    document.getElementById("ketqua").innerText = "Lỗi: Không thể chia cho 0.";
    return;
  }

  // 3. Thực hiện phép chia
  const kq = input.a / input.b;
  
  // 4. Hiển thị kết quả ra HTML
  document.getElementById("ketqua").innerText = "Kết quả: " + kq;
}