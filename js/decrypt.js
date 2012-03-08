$(document).ready(function() {
	var decrypt = function() { 
		var password = $('#password').val();
		var crypted = $('#encrypted').text().replace(/ /g, '').trim();
		try {
			var plain = GibberishAES.dec(crypted, password);
		} catch(e){
			var plain = '<div class="label label-important">密码错误！</div>';
		}
		$('#encrypted').html(plain).show();
		$('#password_tip').remove();
	}
	var ask_for_password = function() {Boxy.alert(
		"<label for='password'>请输入密码</label><input id='password' type='password' /> ",
		null,
		{
			title: "输入密码",
			unloadOnHide: true,
			beforeUnload: decrypt
		}
	)};
	$('#password_tip').click(ask_for_password).click();
});
