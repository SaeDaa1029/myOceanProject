const $confirmText = $("input[name=confirm]");
const $confirmBtn = $("button.kpRdoO");
const $header = $("#header");
const $footer = $("#footer");

//헤더 푸터 연결
$header.load("static/fix/header.html");
$footer.load("static/fix/footer.html");

// 카테고리 크기 미디어쿼리
checkWidth();


/*현재 파일 경로 찾기*/
/*console.log(window.location.pathname);*/

function checkWidth(){
    if(window.innerWidth<564){
        $(".ijXgoc > *").css("margin", "0 auto");

    } else{
        $(".ijXgoc > *").css("margin", "0 20px 0 0");
    }
}


$(window).resize(function(){
    if(window.innerWidth<564){
        $(".ijXgoc > *").css("margin", "0 auto");
    } else{
        $(".ijXgoc > *").css("margin", "0 20px 0 0");
    }
})

// 확인 버튼 활성화
$("input").on("input", function(){
    if($confirmText.val().length > 0){
        $confirmBtn.removeAttr("disabled");
    }else{
        $confirmBtn.attr("disabled", "disabled");
    }
});

