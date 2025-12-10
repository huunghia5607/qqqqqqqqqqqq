

function cong() {
    // Gọi hàm giả định để lấy đầu vào
    const input = getInputs();
    
    // Nếu đầu vào không hợp lệ (input là null), thoát hàm
    if (!input) return;

    // Thực hiện phép cộng
    const kq = input.a + input.b;
    
    // Hiển thị kết quả ra HTML
    document.getElementById("ketqua").innerText = "Kết quả: " + kq;
}