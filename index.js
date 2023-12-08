function getID(id) {
    return document.getElementById(id);
}

function tinhDiem(a, b, c) {
    return (a + b + c) / 3;
}

// Bài 1
// Trúng tuyển nếu: Điểm tổng kết >= điểm chuẩn và không có môn nào 0 điểm
// Điểm tổng kết sẽ bằng (môn 1 + môn 2 + môn 3) / 3 + Điểm ưu tiên
// Khu vực A: 2đ, B: 1đ, C: 0.5đ
// Đối tượng: 1: 2.5đ, 2: 1,5đ, 3: 1đ.
document.getElementById("btnTinhDiem").onclick = function () {
    var khuVuc = Number(getID("options").value);
    var doiTuong = Number(getID("studentType").value);

    if (khuVuc !== " " && doiTuong !== "") {
        var diemTT = Number(getID("diemHoiDong").value);
        var diemThuNhat = Number(getID("monThuNhat").value);
        var diemThuHai = Number(getID("monThuHai").value);
        var diemThuBa = Number(getID("monThuBa").value);
    } else {
        alert("Vui lòng chọn cả khu vực và đối tượng của sinh viên!");
    }

    var diemTB = Number(
        (
            tinhDiem(diemThuNhat, diemThuHai, diemThuBa) +
            doiTuong +
            khuVuc
        ).toFixed(2)
    );

    var text = getID("ketQua");
    var textTT = getID("ketQuaTT");
    var trungTuyen = " ";
    if (diemTB >= diemTT) {
        trungTuyen = "Trúng tuyển";
    } else {
        trungTuyen = "Không trúng tuyển";
    }
    text.innerHTML = diemTB + " điểm.";
    textTT.innerHTML = trungTuyen;
};

document.getElementById("tinhTienDien").onclick = function () {
    var soKW = getID("soDienTieuThu").value;
    var tienDien = 0;

    if (soKW <= 50) {
        tienDien = soKW * 500;
    } else if (soKW <= 100) {
        tienDien = 50 * 500 + (soKW - 50) * 650;
    } else if (soKW <= 200) {
        tienDien = 50 * 500 + 50 * 650 + (soKW - 100) * 850;
    } else if (soKW <= 350) {
        tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
    } else {
        tienDien =
            50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
    }

    var text = getID("tienDien");
    text.innerHTML = tienDien.toLocaleString() + " đồng";
};
