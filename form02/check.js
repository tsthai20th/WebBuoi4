function KiemTra()
{
	var hoten = f.HoTen.value;
	var diachi = f.DiaChi.value;
	var email = f.Email.value;
	var dienthoai = f.DienThoai.value;
	var emEXP = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	var dtEXP = /(\+84|0)+(3[2-9]|5[6|8|9]|9\d(?!5)|8[1-9]|7[0|6-9])+([0-9]{7})\b/g
	if(hoten == '')
	{
		alert('Họ tên không được bỏ trống!');
		return false;
	}
	if(diachi == '')
	{
		alert('Địa chỉ không được bỏ trống!');
		return false;
	}
		if(email == '')
	{
		alert('Email không được bỏ trống!');
		return false;
	}
		if(dienthoai == '')
	{
		alert('Điện Thoại không được bỏ trống!');
		return false;
	}
	if(!emEXP.test(email))
	{
		alert('Email không hợp lệ!');
		return false;
	}
	if(!dtEXP.test(dienthoai))
	{
		alert('Điện thoại phải có 10 số!');
		return false;
	}
	return true;
}