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
  var khuVuc = getID("options").value;
  var doiTuong = getID("studentType").value;

  if (khuVuc !== "" && doiTuong !== "") {
    var diemTT = Number(document.getElementById("diemHoiDong").value);
    var diemThuNhat = Number(document.getElementById("monThuNhat").value);
    var diemThuHai = Number(document.getElementById("monThuHai").value);
    var diemThuBa = Number(document.getElementById("monThuBa").value);

    khuVuc = Number(khuVuc);
    doiTuong = Number(doiTuong);

    var check = diemThuNhat !== 0 && diemThuHai !== 0 && diemThuBa !== 0;
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
    if (diemTB >= diemTT && check) {
      trungTuyen = "Trúng tuyển";
    } else {
      trungTuyen = "Không trúng tuyển";
    }
    text.innerHTML = diemTB + " điểm.";
    textTT.innerHTML = trungTuyen;
  } else {
    alert("Vui lòng chọn cả khu vực và đối tượng của sinh viên!");
  }
};

// Bài 2: Tính tiền điện
document.getElementById("tinhTienDien").onclick = function () {
  var ten = getID("ten").value;
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
  text.innerHTML = `Tiền điện phải trả của ${ten}: ${tienDien.toLocaleString()} đồng.`;
};

// Bài 3: Tính thuế thu nhập cá nhân
document.getElementById("tinhThue").onclick = function () {
  var hoTen = getID("hoTen").value;
  var tongThu = getID("tongThuNhap").value;
  var soNguoi = getID("soNguoi").value;

  var thuNhapChiuThue = tongThu - 4000000 - soNguoi * 1600000;
  var thue = 0;

  if (thuNhapChiuThue <= 60) {
    thue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue <= 120) {
    thue = 60 * 0.05 + (thuNhapChiuThue - 60) * 0.1;
  } else if (thuNhapChiuThue <= 210) {
    thue = 60 * 0.05 + 60 * 0.1 + (thuNhapChiuThue - 120) * 0.15;
  } else if (thuNhapChiuThue <= 384) {
    thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.2;
  } else if (thuNhapChiuThue <= 624) {
    thue =
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      (thuNhapChiuThue - 384) * 0.25;
  } else if (thuNhapChiuThue <= 960) {
    thue =
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      240 * 0.25 +
      (thuNhapChiuThue - 624) * 0.3;
  } else {
    thue =
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      240 * 0.25 +
      336 * 0.3 +
      (thuNhapChiuThue - 960) * 0.35;
  }

  var textThue = getID("thuePhaiTra");
  textThue.innerHTML = `Thuế thu nhập phải trả của ${hoTen}: ${thue.toLocaleString()} đồng.`;
};

// Bài 4: Tính tiền cáp
function check() {
  var loaiKH = document.getElementById("customerType").value;
  var formketnoi = document.getElementById("form-ketnoi");

  if (loaiKH === "0") {
    formketnoi.classList.add("hidden");
  } else {
    formketnoi.classList.remove("hidden");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  check();
  document.getElementById("customerType").addEventListener("change", check);
});

document.getElementById("tinhHoaDon").onclick = function () {
  var maKH = getID("maKH").value;
  var soKenh = getID("soKenhCaoCap").value * 1;
  var loaiKH = getID("customerType").value * 1;
  var loaiKhachHang = " ";
  if (loaiKH == "1") {
    loaiKhachHang = "Doanh Nghiệp";
  } else {
    loaiKhachHang = "Nhà Dân";
  }

  var tienCap = 0;

  if (loaiKH == "1") {
    var soKetNoi = getID("soKetNoi").value * 1;
    var phiHoaDon = 15;
    var phiCoBan = 0;

    if (soKetNoi > 10) {
      phiCoBan = 75 + (soKetNoi - 10) * 5;
    } else {
      phiCoBan = 0;
    }
    var phiCaoCap = 50 * soKenh;

    tienCap = phiHoaDon + phiCoBan + phiCaoCap;
  } else {
    var phiHoaDon = 4.5;
    var phiCoBan = 20.5;
    var phiCaoCap = 7.5 * soKenh;

    tienCap = phiHoaDon + phiCoBan + phiCaoCap;
  }
  var textHoaDon = getID("textHoaDon");
  textHoaDon.innerHTML = `Mã khách hàng: ${maKH}<br>Loại khách hàng: ${loaiKhachHang}<br>Tổng tiền hóa đơn: $${tienCap.toFixed(
    2
  )}`;
};
