function KiemTra()
{
	var username = f.TenDangNhap.value;
	var matkhau = f.MatKhau.value;
	if(username == '')
	{
		alert('Tên đăng nhập không được bỏ trống!');
		return false;
	}
	if(matkhau == '')
	{
		alert('Mật khẩu không được bỏ trống!');
		return false;
	}
	return true;
}