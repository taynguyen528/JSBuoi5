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

  var check = diemThuNhat !== 0 && diemThuHai !== 0 && diemThuBa !== 0;
  // console.log(check);
  var diemTB = Number(
    (tinhDiem(diemThuNhat, diemThuHai, diemThuBa) + doiTuong + khuVuc).toFixed(
      2
    )
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
