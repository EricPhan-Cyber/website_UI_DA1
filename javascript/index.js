const search = document.getElementById("__search").value;
var click = document.getElementById("__searchbtn");
click.addEventListener("click", rules);

function rules() {
  if (search == "") {
    return alert("Vui lòng nhập vào ô tìm kiếm!");
  }
}

function frontEndForm(a, b, c) {
  document.getElementById("tinthuong").style.display = b || "none";
  document.getElementById("tinvip").style.display = c || "none";
  document.getElementById("_tongtien").innerHTML = a + "đ";
}

let loaiTin = "";
const giaThuong = document.getElementById("tinthuong").value;
const giaVip = document.getElementById("tinvip").value;

function tongTien(gia, numberOfDay) {
  const tongTien = numberOfDay * gia;
  return tongTien;
}

function myChoose(a) {
  const values = a.value;
  loaiTin = values;
  const so_ngay = document.getElementById("ngaydang").value;

  if (values === "") {
    frontEndForm("___");
  } else if (values === "tin thuong") {
    frontEndForm(tongTien(giaThuong, so_ngay), "block", null);
  } else if (values === "tin vip") {
    frontEndForm(tongTien(giaVip, so_ngay), null, "block");
  }
}

function check(e) {
  // console.log(e.value);
  // console.log(giaThuong);
  const numberOfDay = e.value;
  if (loaiTin === "") {
    frontEndForm("___");
  } else if (loaiTin === "tin thuong") {
    frontEndForm(tongTien(giaThuong, numberOfDay), "block", null);
  } else if (loaiTin === "tin vip") {
    frontEndForm(tongTien(giaVip, numberOfDay), null, "block");
  }
}

document.getElementById("date").value = new Date()
  .toISOString()
  .substring(0, 10);
