document.getElementById("hoten").focus();

document.getElementById("hoten").onblur = function() {
	this.value = ChuanhoaTen(this.value);
};

document.getElementById("hoten").onkeyup = function(e) {
	DoKeyup(e, this, 'diachi');
};

document.getElementById("diachi").onkeyup = function(e) {
	DoKeyup(e, this, 'nam');
};

document.getElementById("nam").onkeyup = function(e) {
	DoKeyup(e, this, 'nu');
};

document.getElementById("nu").onkeyup = function(e) {
	DoKeyup(e, this, 'ngaysinh');
};

document.getElementById("ngaysinh").onkeyup = function(e) {
	DoKeyup(e, this, 'email');
};

document.getElementById("email").onkeyup = function(e) {
	DoKeyup(e, this, 'tensudung');
};
document.getElementById("tensudung").onkeyup = function(e) {
	DoKeyup(e, this, 'matkhau');
};
document.getElementById("matkhau").onkeyup = function(e) {
	DoKeyup(e, this, 'rematkhau');
};
document.getElementById("rematkhau").onkeyup = function(e) {
	DoKeyup(e, this, 'ghichu');
};
function DoKeyup(e, myself, nextcontrolid) {
	if (window.event) e = window.event; //tren IE
	if (e.keyCode == 13) {
		document.getElementById(nextcontrolid).focus();
	}
}

function Chapnhan() {
	var okie = true; //chua co loi

}


function laEmail(s) {
	return true;
}

//kiem tra s la ten su dung hop le hay khong
function laTenSD(s) {
	return true;
}

function laNgayThang(d) { //d = nn/tt/nnnn
    //kiem tra d co phai la ngay thang
	//tach xau d boi dau /
	s = d.split('/');

	if (s.length != 3) return false; //phai co 3 phan
	if (isNaN(s[0]) || isNaN(s[1]) || isNaN(s[2])) return false;//ca 3 la so

	//chuyen thanh cac so nguyen
	ngay = parseInt(s[0]);
	thang = parseInt(s[1]);
	nam = parseInt(s[2]);

	//kiem tra
	if (thang > 12 || thang < 1) return false;
	if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12) {
		if (ngay > 31) return false;
	} else if (thang == 2){
		if (nam%4 == 0 && nam%100 != 0) {
			if (ngay > 29) return false;
		} else if (ngay > 28) return false;
	} else if (ngay > 30) return false;

	if (ngay < 1) return false;

	date = new Date();
	if (nam > date.getFullYear() || nam < 1950) return false;

	return true;
}



function ChuanhoaTen(ten) {
	dname = ten;
	ss = dname.split(' ');
	dname = "";
	for (i = 0; i < ss.length; i++)
		if (ss[i].length > 0) {
			if (dname.length > 0) dname = dname + " ";
			dname = dname + ss[i].substring(0, 1).toUpperCase();
			dname = dname + ss[i].substring(1).toLowerCase();
		}
	return dname;
}

//bam nut bo qua
function Boqua() {
	document.location.href = "../";
}
