/* ==========================================================================
   Hàm upDate: Kích hoạt khi di chuột qua ảnh nhỏ (onmouseover)
   ========================================================================== */
function upDate(previewPic) {
    // 1. Kiểm tra xem sự kiện có kích hoạt hay không
    console.log("Sự kiện upDate đã được kích hoạt thành công!");

    // 2. In ra thông tin thuộc tính alt và src của ảnh nhỏ đang được chọn
    console.log("Ảnh được chọn - ALT text: " + previewPic.alt);
    console.log("Ảnh được chọn - SRC url: " + previewPic.src);

    // Lấy phần tử hiển thị ảnh lớn bằng ID
    let targetImageDiv = document.getElementById("image");

    // 3. Thay đổi nội dung chữ thành đoạn văn alt của ảnh nhỏ
    targetImageDiv.innerHTML = previewPic.alt;

    // 4. Thay đổi hình nền (background-image) thành đường dẫn src của ảnh nhỏ
    targetImageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* ==========================================================================
   Hàm undo: Kích hoạt khi rời chuột khỏi ảnh nhỏ (onmouseleave)
   ========================================================================== */
function undo() {
    // Kiểm tra sự kiện phản hồi khi rời chuột
    console.log("Sự kiện undo đã được kích hoạt!");

    // Lấy phần tử hiển thị ảnh lớn bằng ID
    let targetImageDiv = document.getElementById("image");

    // 1. Khôi phục lại đường dẫn hình nền về trạng thái trống ban đầu
    targetImageDiv.style.backgroundImage = "url('')";

    // 2. Khôi phục lại nội dung chữ mặc định ban đầu
    targetImageDiv.innerHTML = "Hover over an image below to display here.";
}
