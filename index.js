function getID(id) {
    return document.getElementById(id);
}

// Bài 1
// Trúng tuyển nếu: Điểm tổng kết >= điểm chuẩn và không có môn nào 0 điểm
// Điểm tổng kết sẽ bằng (môn 1 + môn 2 + môn 3) / 3 + Điểm ưu tiên
// Khu vực A: 2đ, B: 1đ, C: 0.5đ
// Đối tượng: 1: 2.5đ, 2: 1,5đ, 3: 1đ.
document.getElementById("btnTinhDiem").onclick = function () {
    var diemHD = Number(getID("diemHoiDong").value);
    var diemThuNhat = Number(getID("monThuNhat").value);
    var diemThuHai = Number(getID("monThuHai").value);
    var diemThuBa = Number(getID("monThuBa").value);
    var khuVuc = getID("options").value;
    var doiTuong = getID("studentType").value;

    console.log(diemHD);
    console.log(diemThuNhat);
    console.log(diemThuHai);
    console.log(diemThuBa);
    console.log(khuVuc);
    console.log(doiTuong);
};
