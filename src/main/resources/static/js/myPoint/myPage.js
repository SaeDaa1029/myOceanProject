const $save = $("button.jMUPmW");
const $nicknameInput = $("input[name=nickname]");
const $nickname = $(".gGztpV");
const $profilePicture = $(".iOgbWN");
const $header = $("#header");
const $footer = $("#footer");

//헤더 푸터 연결
$header.load("../fix/header.html");
$footer.load("../fix/footer.html");

// 카테고리 크기 미디어쿼리
checkWidth();

$(window).resize(function(){
    if(window.innerWidth<564){
        $(".dduMk").css("gap", "53px");
    } else{
        $(".dduMk").css("gap", "60px");
    }
})

function checkWidth(){
    if(window.innerWidth<564){
        $(".dduMk").css("gap", "53px");
    } else{
        $(".dduMk").css("gap", "60px");
    }
}


//닉네임 변경 input 클릭 시
$nickname.on("click", function(){
    $(this).css("border", "1px solid #b3d4fc");
})
//닉네임 변경 input 벗어났을 때
$nickname.on("blur", function(){
    $(this).css("border", "1px solid rgb(238, 238, 238)");
})

//닉네임 유효성 검사
$save.on("click", function(){
    //닉네임 입력하지 않았을 경우
    if($nicknameInput.val()==0){
        alert("닉네임을 입력해주세요.");
        return;
    }
})


// 프로필 사진 변경
$profilePicture.on("click", function(){
    $(".fSxFPc").click();
})