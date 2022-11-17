/* host.html */

// 탭에 따라 변경하는 부분들
$('.explain').hide();
$('.noticeEx').hide();
$('#__BVID__287___BV_modal_outer_').hide();
$('.place').hide();
$('.image-header').hide();
$('.img-box').hide();

// 기본정보/프립설명 탭 이동
$(".nav-item a").on('click', function(e){
    e.preventDefault();
    console.log($(this).attr('id'));
    console.log($(this).attr('id') == '__BVID__562___BV_tab_button__');
    if ($(this).attr('id') == '__BVID__562___BV_tab_button__'){
        $('.basic-info').show();
        $('.noticeInfo').show();
        $('.explain').hide();
        $('.noticeEx').hide();
    }else if($(this).attr('id') == '__BVID__696___BV_tab_button__'){
        $('.explain').show();
        $('.noticeEx').show();
        $('.noticeInfo').hide();
        $('.basic-info').hide();
    }

    if($('.nav-item a').attr('aria-selected')){
        $('.nav-item a').attr('aria-selected', 'false');
        $('.nav-item a').attr('class', 'nav-link');
        $('.nav-item a').attr('tabindex', '-1');
    }
    if(!$(this).attr('aira-selected')){
        $(this).attr('aria-selected', 'ture');
        $(this).attr('class', 'nav-link active active-tab');
        $(this).attr('tabindex', '');
    }    
});

// focus됐을 때 border 보라색으로 변경
$('.input-group .form-control').on('focus', function(){
    $(this).next().children('span').css('border-color', '#7a29fa');
    $(this).css('border-color', '#7a29fa');
});


// 글자 수 세기
$('.input-group input[type=text].form-control').on('input', function(){
    $(this).next().children('span').children('small').text($(this).val().length + ' / 40');
});

// 인풋태그 블러 이벤트
$('.input-group .form-control').on('blur', function(){
    $(this).next().children('span').css('border-color', '');
    $(this).css('border-color', '');
    if(!$(this).val()){
        $(this).attr('class', 'form-control is-invalid');
        $(this).next().children('span').attr('class', 'input-group-text is-invalid');
        $(this).closest('.input-group').next().css('display','block');
    }else{
        $(this).attr('class', 'form-control');
        $(this).next().children('span').attr('class', 'input-group-text');
        $(this).closest('.input-group').next().css('display','none');
    }
});

// 프립 유형 선택
$('.selectBox.mx-2').on('click', function(){
    $('.selectBox.mx-2').attr('class', 'selectBox mx-2');
    if($(this).attr('class') != 'selectBox mx-2 selected'){
        $(this).attr('class', 'selectBox mx-2 selected');
        ($(this).attr('data-type') == 'offline'? $('.place').show() : $('.place').hide());
    }
});

// 모달창 닫기
function closeModal(){
    $('#__BVID__287___BV_modal_outer_').hide();
}


// 진행 장소 추가 버튼 클릭 -> 모달창 열기
function findPlace(){
    $('#__BVID__287___BV_modal_outer_').show();
    $('#__BVID__287___BV_modal_content_').show();
    $('#__BVID__1216___BV_modal_content_').hide();
}
// 진행 장소 등록 버튼 클릭 이벤트막기(추후 REST써야하는 버튼임)
$('.container .btn-frip-primary').on('click', function(e){
    e.preventDefault();
    closeModal();
});

// 일정 추가 버튼 클릭 -> 모달창 열기
$('.day-btn').on('click', function(){
    $('#__BVID__287___BV_modal_outer_').show();
    $('#__BVID__287___BV_modal_content_').hide();
    $('#__BVID__1216___BV_modal_content_').show();
});

// 주차장 옵션 버튼 눌렀을때, 주차옵션이 있다면 메모를 할 수 있게함
$('#parkingOption .custom-radio').on('click', function(){
    if($(this).children('input').attr('id') != 'parkingOption_BV_option_0'){
        $(this).val('true');
        $('#parkingOption_BV_option_0').val('false')
        $('#textarea').prop('disabled', true);
    }else{
        $('#parkingOption_BV_option_0').val('true')
        $('#textarea').prop('disabled', false); 
    }
});

// 옵션 선택 박스 선택시
$('.col-lg-5.selectBox').on('click', function(){
    $(this).attr('class', 'col-lg-5 selectBox selected');
});

function readURL(input) {
    if (input.files && input.files[0]) {
        
        var reader = new FileReader();
        reader.onload = function(e) {
            var url = e.target.result;
            $('.img-box').attr('src', url); 
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$('.plusThumb').on('change', function(){
    readURL(this);
    $('.image-header').show();
    $('.img-box').show();
});

$('.removeImg').on('click', function(){
    $('.img-box').attr('src', ''); 
});

$('.fixed-bottom .frip-button').on('click', function(){

});