/* 아이디,패스워드 입력값 */
var $emailCheck=loginForm.email;
var $passwordCheck=loginForm.password;
var emailRegex=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/;

/* 아이디 입력박스 클릭시 */
$(loginForm.email).on("click",function(e){
    $(this).css("border","1px solid blue");
    $("#passwordbox").css("border","");
});

/* 패스워드 입력박스 클릭시 */
$(loginForm.password).on("click",function(e){
    $(this).css("border","1px solid blue");
    $("#emailbox").css("border","");
});

/* 아이디 입력박스 위치에서 다른 곳 클릭시 */
$(loginForm.email).on("blur",function(e){
    $("input[name='email']").css("border","");
});
/* 패스워드 입력박스 위치에서 다른 곳 클릭시 */
$(loginForm.password).on("blur",function(e){
    $("input[name='password']").css("border","");
});

/* 아이디 입력박스 입력값이 입력될 때마다 검사 */
$(loginForm.email).on("change input",function(e){
    console.log($emailCheck.value);
    var emailRegex=/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if(!emailRegex.test($emailCheck.value)){
        $(".bViOzS").text("올바른 이메일 형식이 아닙니다.");
        $(".bViOzS").css("color","rgb(222,28,34)");
        $("input[name='email']").css("border","1px solid rgb(222,28,34)");
    }
    if($emailCheck.value=="" || emailRegex.test($emailCheck.value)){
        $(".bViOzS").text("");
        $("input[name='email']").css("border","");
    }
    if($emailCheck.value==""){
        $("button[type='submit']").attr("disabled",true);
        $("button[type='submit']").attr("class","iikbgZ");
    }
});


/* 패스워드 입력박스 입력값이 입력될 때마다 검사 */
$(loginForm.password).on("change input",function(e){
    if(!$passwordCheck.value){
        $("input[name='password']").css("border","1px solid rgb(222,28,34)");
        $("button[type='submit']").attr("disabled",true);
        $("button[type='submit']").attr("class","iikbgZ");
        /* 패스워드 입력박스 위치에서 패스워드 값이 없을때 다른 곳 클릭시 */
        $(loginForm.password).on("blur",function(){$("input[name='password']" ).css("border","1px solid rgb(222,28,34)");});
        loginForm.password.focus();
    }
    else{
        $("input[name='password']").css("border","1px solid blue");
        /* 패스워드 입력박스 위치에서 패스워드 값이 있을때 다른 곳 클릭시 */
        $(loginForm.password).on("blur",function(){$("input[name='password']" ).css("border","");});
        if(emailRegex.test($emailCheck.value) && $passwordCheck.value){
            $("button[type='submit']").attr("disabled",false);
            $("button[type='submit']").attr("class","dDCuWg");
        }
    }
});