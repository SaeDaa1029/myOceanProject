var $nicknameCheck=joinForm.nickname;
/* 테스트를 위한 더미데이터 */
var nicknametest="aaa";
var $emailCheck=joinForm.email;
var $numberCheck=joinForm.verificationCode;
var emailRegex=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/;
// var emailRegex=/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
var saveNumber="";
function randomNumber(){
    for(let i=0;i<6;i++){
        saveNumber+=parseInt(Math.random()*10);
    }
}

$(".Form__Input-sc-1quypp7-1").on("click",function(){
    $(".Form__Input-sc-1quypp7-1").css("border","");
    $(".Form__Input-sc-1quypp7-1").css("background-color","rgb(250,250,250)");
    $(this).css("border","1px solid blue");
    $(this).css("background-color","white");
});

$(joinForm.nickname).on("blur",function(){
    $("input[name='nickname']").css("border","");
    $(".Form__Input-sc-1quypp7-1").css("background-color","rgb(250,250,250)");
});
$(joinForm.email).on("blur",function(){
    $("input[name='email']").css("border","");
    $(".Form__Input-sc-1quypp7-1").css("background-color","rgb(250,250,250)");
});
$(joinForm.verificationCode).on("blur",function(){
    $("input[name='verificationCode']").css("border","");
    $(".Form__Input-sc-1quypp7-1").css("background-color","rgb(250,250,250)");
});

$(joinForm.nickname).on("change input",function(){
    if($nicknameCheck.value==nicknametest){
        $("input[name='nickname']").attr("class","Form__Input-sc-1quypp7-1 hYhAPw");
        $(".bViOzS").text("이미 사용중인 닉네임입니다.");
    }
    else{
        $("p.bViOzS").text("");
        $("input[name='nickname']").attr("class","Form__Input-sc-1quypp7-1 iRBMai");
        $("input[name='nickname']").css("border","");
    }
});

$(joinForm.email).on("change input",function(){
    if(!emailRegex.test($emailCheck.value)){
        console.log("regex block");
        $("input[name='email']").attr("class","Form__Input-sc-1quypp7-1 hYhAPw");
        $(".bViOzSS").text("올바른 이메일 형식이 아닙니다.");
        $("button[name='sendemail']").attr("disabled",true);
        $("button[name='sendemail']").attr("class","Button-bqxlp0-0 gsRKCU");
        if($emailCheck.value==""){
            $("p.bViOzSS").text("");
            $("input[name='email']").attr("class","Form__Input-sc-1quypp7-1 iRBMai");
            $("input[name='email']").css("border","");
        }
    }
    else if(emailRegex.test($emailCheck.value)){
        console.log("regex pass");
        $("p.bViOzSS").text("");
        $("input[name='email']").attr("class","Form__Input-sc-1quypp7-1 iRBMai");
        $("input[name='email']").css("border","");
        $("button[name='sendemail']").attr("disabled",false);
        $("button[name='sendemail']").attr("class","Button-bqxlp0-0 jDtYZb");
    }
});

$(joinForm.sendemail).on("click",function(){
    $(".hKZUBk").text("인증번호가 전송되었습니다.");
    $(".hKZUBk").css("top","0px");
    setTimeout(function(){
        $(".hKZUBk").css("top","-88px");
        $(".hKZUBk").text("인증번호가 전송되었습니다.");
    },2000);
});
console.log(saveNumber);
$(joinForm.verificationCode).on("change input",function(){
    if(($numberCheck.value+"").length!=6){
        $("input[name='verificationCode']").attr("class","Form__Input-sc-1quypp7-1 hYhAPw");
        $(".bViOzSSS").css("color","rgb(222, 28, 34)");
        $(".bViOzSSS").text("올바른 인증번호 형식이 아닙니다.");
        $("button[name='verify']").attr("disabled",true);
        $("button[name='verify']").attr("class","Button-bqxlp0-0 jquNPr");
        if($numberCheck.value==""){
            $("p.bViOzSSS").text("");
            $("input[name='verificationCode']").attr("class","Form__Input-sc-1quypp7-1 iRBMai");
            $("input[name='verificationCode']").css("border","");
        }
    }
    else{
        $("p.bViOzSSS").text("");
        $("input[name='verificationCode']").attr("class","Form__Input-sc-1quypp7-1 iRBMai");
        $("input[name='verificationCode']").css("border","");
        $("button[name='verify']").attr("disabled",false);
        $("button[name='verify']").attr("class","Button-bqxlp0-0 cEVDVY");
        
    }
});

var checkNumber=false;

$("button[name='verify']").on("click",function(){
    if($numberCheck.value!=saveNumber){
        checkNumber=false;
        $(".bViOzSSS").text("인증번호를 다시 입력해주세요.");
    }
    else{
        $(".bViOzSSS").css("color","blue");
        $(".bViOzSSS").text("인증에 성공하셨습니다.");
        checkNumber=true;
        if(checkNumber){
            $("button[name='join']").attr("disabled",false);
            $("button[name='join']").attr("class","Button-bqxlp0-0 SubmitButton__RegisterPageSubmitButton-np91gr-0 foCOgK");
            $("button[name='sendemail']").attr("disabled",true);
            $("button[name='sendemail']").attr("class","Button-bqxlp0-0 gsRKCU");
            $("button[name='verify']").attr("disabled",true);
            $("button[name='verify']").attr("class","Button-bqxlp0-0 jquNPr");
            $("button[name='join']").on("click",function(){/* 가입하기 버튼 클릭시 */
                joinForm.submit();
            });
        }
        else{
            $("button[name='join']").attr("disabled",true);
            $("button[name='join']").attr("class","Button-bqxlp0-0 SubmitButton__RegisterPageSubmitButton-np91gr-0 chSrfn");
        }
    }
});



var timer = null;
var isRunning = false;

$("button[name='sendemail']").on("click", function() {
  var display = $(".jFLIap");
  // 유효시간 설정
  var leftSec = 300;
    saveNumber="";
    randomNumber();
  // 버튼 클릭 시 시간 연장
  if (isRunning){
    clearInterval(timer);
    display.html("");
    startTimer(leftSec, display);
  }else{
  	startTimer(leftSec, display);
  }
});
    
function startTimer(count, display) {  
  var minutes, seconds;
  timer = setInterval(function () {
    minutes = parseInt(count / 60, 10);
    seconds = parseInt(count % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    if(!checkNumber){
        display.html("남은 시간: "+minutes + "분 " + seconds+"초");
    }else{
        display.html("");
    }
    // 타이머 끝
    if (--count < 0) {
      clearInterval(timer);
      $("button[name='verify']").attr("disabled", true);
      saveNumber="";
      randomNumber();
      isRunning = false;
      return;
    }

  }, 1000);
  isRunning = true;
}

var checkmark1=false;
var checkmark2=false;
var checkmark3=false;
var checkmark4=false;
var count=0;



$("#btn1").on("click",function(){
    if(!checkmark1){
        ++count;
        $("#g1").children().next().attr("style","display:block");
        $("#g1").children().children().next().attr("transform","matrix(1,0,0,1,8.5,5.532697677612305)");
        $("#g1").children().next().children().children().attr("d","M-7.875,-1.637773036956787 C-7.875,-1.637773036956787 -2.6144704818725586,3.9723966121673584 -2.6144704818725586,3.9723966121673584 C-2.6144704818725586,3.9723966121673584 8.023958206176758,-5.832714557647705 8.023958206176758,-5.832714557647705");
        checkmark1=true;
    }else{
        --count;
        $("#g1").children().next().attr("style","display:none");
        $("#g1").children().children().next().attr("transform","matrix(1,0,0,1,8.5,5.681000232696533)");
        $("#g1").children().next().children().children().attr("d","M-7.875,-1.5011694431304932 C-7.875,-1.5011694431304932 -7.611988544464111,-1.2014505863189697 -7.611988544464111,-1.2014505863189697 C-7.611988544464111,-1.2014505863189697 -7.472008228302002,-1.0000996589660645 -7.472008228302002,-1.0000996589660645");
        checkmark1=false;
    }
    console.log(count);
});
$("#btn2").on("click",function(){
    if(!checkmark2){
        ++count;
        $("#g2").children().next().attr("style","display:block");
        $("#g2").children().children().next().attr("transform","matrix(1,0,0,1,8.5,5.532697677612305)");
        $("#g2").children().next().children().children().attr("d","M-7.875,-1.637773036956787 C-7.875,-1.637773036956787 -2.6144704818725586,3.9723966121673584 -2.6144704818725586,3.9723966121673584 C-2.6144704818725586,3.9723966121673584 8.023958206176758,-5.832714557647705 8.023958206176758,-5.832714557647705");
        checkmark2=true;
    }else{
        --count;
        $("#g2").children().next().attr("style","display:none");
        $("#g2").children().children().next().attr("transform","matrix(1,0,0,1,8.5,5.681000232696533)");
        $("#g2").children().next().children().children().attr("d","M-7.875,-1.5011694431304932 C-7.875,-1.5011694431304932 -7.611988544464111,-1.2014505863189697 -7.611988544464111,-1.2014505863189697 C-7.611988544464111,-1.2014505863189697 -7.472008228302002,-1.0000996589660645 -7.472008228302002,-1.0000996589660645");
        checkmark2=false;
    }
    console.log(count);
});
$("#btn3").on("click",function(){
    if(!checkmark3){
        ++count;
        $("#g3").children().next().attr("style","display:block");
        $("#g3").children().children().next().attr("transform","matrix(1,0,0,1,8.5,5.532697677612305)");
        $("#g3").children().next().children().children().attr("d","M-7.875,-1.637773036956787 C-7.875,-1.637773036956787 -2.6144704818725586,3.9723966121673584 -2.6144704818725586,3.9723966121673584 C-2.6144704818725586,3.9723966121673584 8.023958206176758,-5.832714557647705 8.023958206176758,-5.832714557647705");
        checkmark3=true;
    }else{
        --count;
        $("#g3").children().next().attr("style","display:none");
        $("#g3").children().children().next().attr("transform","matrix(1,0,0,1,8.5,5.681000232696533)");
        $("#g3").children().next().children().children().attr("d","M-7.875,-1.5011694431304932 C-7.875,-1.5011694431304932 -7.611988544464111,-1.2014505863189697 -7.611988544464111,-1.2014505863189697 C-7.611988544464111,-1.2014505863189697 -7.472008228302002,-1.0000996589660645 -7.472008228302002,-1.0000996589660645");
        checkmark3=false;
    }
    console.log(count);
});
$("#btn4").on("click",function(){
    if(!checkmark4){
        ++count;
        $("#g4").children().next().attr("style","display:block");
        $("#g4").children().children().next().attr("transform","matrix(1,0,0,1,8.5,5.532697677612305)");
        $("#g4").children().next().children().children().attr("d","M-7.875,-1.637773036956787 C-7.875,-1.637773036956787 -2.6144704818725586,3.9723966121673584 -2.6144704818725586,3.9723966121673584 C-2.6144704818725586,3.9723966121673584 8.023958206176758,-5.832714557647705 8.023958206176758,-5.832714557647705");
        checkmark4=true;
    }else{
        --count;
        $("#g4").children().next().attr("style","display:none");
        $("#g4").children().children().next().attr("transform","matrix(1,0,0,1,8.5,5.681000232696533)");
        $("#g4").children().next().children().children().attr("d","M-7.875,-1.5011694431304932 C-7.875,-1.5011694431304932 -7.611988544464111,-1.2014505863189697 -7.611988544464111,-1.2014505863189697 C-7.611988544464111,-1.2014505863189697 -7.472008228302002,-1.0000996589660645 -7.472008228302002,-1.0000996589660645");
        checkmark4=false;
    }
    console.log(count);
});


$(".csrOqO").on("click",function(){
    if(count>=3 && (checkmark1 && checkmark2 && checkmark3)){
        $(".eMDzoo").attr("disabled",false);
        $(".eMDzoo").css("background-color","rgba(0, 117, 239,1)");
    }else{
        $(".eMDzoo").attr("disabled",true);
        $(".eMDzoo").css("background-color","rgba(0, 117, 239,0.5)");
    }
});















/* {{from_name}}
{{to_name}}
{{reply_to}}
{{reply_from}} */


