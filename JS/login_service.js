/**
 * 文件名： login_service.js 描述: 登录服务
 */

/**
 * 获取账号，密码，AJAX递交，进行检索
 */
function myFunction() {
//	var userid = $("#userid").val();
//	var password = $("#password").val();
	//判断账号密码是否为空
    var elemUsername = document.getElementById("userid");
    var userid = elemUsername.value;
    userid = trimstring(userid);
    elemUsername.value = userid;
    var elemPassword = document.getElementById("password");
    var password = elemPassword.value;
    password = trimstring(password);
    elemPassword.value = password;
    
	if (userid == '' || password == '') 
	{		
		document.getElementById('required').className = "error-show";
        setFocusLoginPage();
        return false;
    }

	<!--var data = {
		userid : $("#userid").val(),
		password : $("#password").val(),
	};
	var serverURL = "http://localhost:8080/";
	//var serverURL = "http://192.168.1.103:8080/";
	var searchKey = encodeURIComponent(encodeURI(JSON.stringify(data)));
	/** AJAX递交* */
	$.ajax({
		type : "get",
		url : serverURL + "/login",
		dataType : "json",
		processData : false,
		data : "searchKey=" + searchKey,
		success : function(data) {
			var resultListArray = String(data.resultList).split(",");
			sessionStorage.setItem("userid", resultListArray[0]);
			sessionStorage.setItem("password", resultListArray[1]);
			sessionStorage.setItem("users_right", resultListArray[2]);
			onLoad();

		}
	});-->
	onLoad();
}

/**
 * trim操作
 */
function trimstring(str){
	if (str) {
	if (str.replace) {
		var val = str.replace(/(^\s*)|(\s*$)/g,"");
		return val;
	} else {
		return stringtrim(str)
	}
	}
	return str;
}
/**
 * 当账号或者密码为空时聚焦
 */
function setFocusLoginPage()
{  
    var elemUsername = document.getElementById("userid");
    var userid = elemUsername.value;
    userid = trimstring(userid);
	var elemPassword = document.getElementById("password");
    var password = elemPassword.value;
    password = trimstring(password);
          
    if(userid != null && userid != "")
    {
      elemUsername.focus();
	  elemPassword.focus();
    }
    else
    {
      elemUsername.focus();
    }
}


/**
 * 用户权限判断
 */
function onLoad() {
	var elemUsername = document.getElementById("userid");
    var userid = elemUsername.value;
	if (userid == "zhanrui") {
		window.location.href = "http://www.baidu.com";
	}
	if (elemUsername == "zhanrui") {
		window.location.href = "http://map.baidu.com/";
	}
	if (userRight == "3") {
		window.location.href = "../html/index.html?rank=3";
	}
	if (userRight == "4") {
		window.location.href = "../html/index.html?rank=4";
	}
	if (userRight == "5") {
		window.location.href = "../html/index.html?rank=5";
	}
}