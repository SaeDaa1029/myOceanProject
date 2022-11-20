/* host.html */

// 탭에 따라 변경하는 부분들
$('#__BVID__287___BV_modal_outer_').css('display', '');
$('.place').css('display', '');
$('.image-header').css('display', '');
$('.img-box').css('display', '');
$('.explain').css('display', '');
$('.noticeEx').css('display', '');



//다이어리
const makeCalendar = (date) => {
    const currentYear = new Date(date).getFullYear();
    const currentMonth = new Date(date).getMonth() + 1;

    const firstDay = new Date(currentYear, currentMonth - 1, 1).getDay();
    const lastDay = new Date(currentYear, currentMonth, 0).getDate();

    const limitDay = firstDay + lastDay;
    const nextDay = Math.ceil(limitDay / 7) * 7;

    let htmlDummy = '';
    let count = 0;

    htmlDummy += `<tr data-v-1e397a0c="" class="week">`;
    for (let i = 0; i < firstDay; i++) {
        htmlDummy += `<td data-v-1e397a0c="">`;
        htmlDummy += `<div data-v-3655f65c="" data-v-1e397a0c="" class="day">`;
        htmlDummy += `<div data-v-3655f65c="" class="clearfix px-2 pt-2">`;
        htmlDummy += `<div data-v-3655f65c="" class="float-left">`;
        htmlDummy += `<div data-v-3655f65c="" class="day-btn">+</div>`;
        htmlDummy += `</div>`;
        htmlDummy += `<div data-v-3655f65c="" class="text-gray float-right">`;
        htmlDummy += `</div>`;
        htmlDummy += `</div>`;
        htmlDummy += `</div>`;
        htmlDummy += `<div data-v-3655f65c="" class="px-2"></div>`;
        htmlDummy += `</div>`;
        htmlDummy += `</td>`;
        count = i;
        console.log(++count + '더미 끝');
    }

    for (let i = 1; i <= lastDay; i++) {
        console.log(count + "시작")
        if (count % 7 === 0) {
            count = 0;
            htmlDummy += `<tr data-v-1e397a0c="" class="week">`;
        }
        htmlDummy += `<td data-v-1e397a0c="">`;
        htmlDummy += `<div data-v-3655f65c="" data-v-1e397a0c="" class="day">`;
        htmlDummy += `<div data-v-3655f65c="" class="clearfix px-2 pt-2">`;
        htmlDummy += `<div data-v-3655f65c="" class="float-left">`;
        htmlDummy += `<div data-v-3655f65c="" class="day-btn">+</div>`;
        htmlDummy += `</div>`;
        htmlDummy += `<div data-v-3655f65c="" class="text-gray float-right">`;
        htmlDummy += `<!----> ${i}일`;
        htmlDummy += `</div>`;
        htmlDummy += `</div>`;
        htmlDummy += `</div>`;
        htmlDummy += `<div data-v-3655f65c="" class="px-2"></div>`;
        htmlDummy += `</div>`;
        htmlDummy += `</td>`;
        if (count % 7 === 0 && count !== 0) {
            console.log('/tr');
            htmlDummy += `</tr>`;
        }

        count++
    }

    for (let i = limitDay; i < nextDay; i++) {
        htmlDummy += `<td data-v-1e397a0c="">`;
        htmlDummy += `<div data-v-3655f65c="" data-v-1e397a0c="" class="day">`;
        htmlDummy += `<div data-v-3655f65c="" class="clearfix px-2 pt-2">`;
        htmlDummy += `<div data-v-3655f65c="" class="float-left">`;
        htmlDummy += `<div data-v-3655f65c="" class="day-btn">+</div>`;
        htmlDummy += `</div>`;
        htmlDummy += `<div data-v-3655f65c="" class="text-gray float-right">`;
        htmlDummy += `</div>`;
        htmlDummy += `</div>`;
        htmlDummy += `</div>`;
        htmlDummy += `<div data-v-3655f65c="" class="px-2"></div>`;
        htmlDummy += `</div>`;
        htmlDummy += `</td>`;
    }

    document.querySelector(`.calendar`).innerHTML = htmlDummy;
    document.querySelector(`.dateTitle`).innerText = `${currentYear}년 ${currentMonth}월`;
}
const date = new Date();

makeCalendar(date);

// 이전달 이동
$(`.prevDay`).on('click',function(){
    makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
});


// 다음달 이동
$(`.nextDay`).on('click', function(){
    makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
});


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

//주소 찾기 버튼클릭 시
$('.findBtn').on('click', function(){
    find();
});

//다음 주소찾기 서비스 실행
function find(){
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById("placeAddress").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("placeAddress").focus();
        }
    }).open();
}


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

//국내 || 해외 선택
$('.countryOption .custom-radio').on('click', function(){
    if($(this).attr('data-value') != 'country'){
        $('.findBtn').hide();
    }else{
        $('.findBtn').show();
    }
});


// 진행 장소 등록 버튼 클릭 이벤트막기
$('.container .btn-frip-primary').on('click', function(e){
    if($('input[data-v-72dffd28]').eq(2).val() == ""){
        $('input[data-v-72dffd28]').eq(2).blur();
    }
    if($('#placeAddress').val() == ""){
        e.preventDefault();
        $('#placeAddress').blur();
    }
    if($('input[data-v-72dffd28]').eq(2).val() != "" && $('#placeAddress').val() != ""){
        e.preventDefault();

        closeModal();
    }
});

$('#placeAddress').on('blur', function(){
    if(!$(this).val()){
        $(this).attr('class', 'form-control is-invalid');
    }else{
        $(this).attr('class', 'form-control');
    }
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

//인풋에서 이미지 주소 불러오기
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

//섬네일 추가
$('.plusThumb').on('change', function(){
    readURL(this);
    $('.image-header').show();
    $('.img-box').show();
});

//섬네일 삭제
$('.removeImg').on('click', function(){
    $('.img-box').attr('src', '');
});

//등록버튼
$('.fixed-bottom .frip-button').on('click', function(){

});

//에디터
$(function() {
    var plugins = [
        "advlist", "autolink", "lists", "link", "image", "charmap", "print", "preview", "anchor",
        "searchreplace", "visualblocks", "code", "fullscreen", "insertdatetime", "media", "table",
        "paste", "code", "help", "wordcount", "save"
    ];
    var edit_toolbar = 'formatselect fontselect fontsizeselect |'
        + ' forecolor backcolor |'
        + ' bold italic underline strikethrough |'
        + ' alignjustify alignleft aligncenter alignright |'
        + ' bullist numlist |'
        + ' table tabledelete |'
        + ' link image';

    tinymce.init({
        language: "ko_KR", //한글판으로 변경
        selector: '.editor',
        height: 500,
        menubar: false,
        plugins: plugins,
        toolbar: edit_toolbar,

        /*** image upload ***/
        image_title: true,
        /* enable automatic uploads of images represented by blob or data URIs*/
        automatic_uploads: true,
        /*
            URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
            images_upload_url: 'postAcceptor.php',
            here we add custom filepicker only to Image dialog
        */
        file_picker_types: 'image',
        /* and here's our custom image picker*/
        file_picker_callback: function (cb, value, meta) {
            var input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');

            /*
            Note: In modern browsers input[type="file"] is functional without
            even adding it to the DOM, but that might not be the case in some older
            or quirky browsers like IE, so you might want to add it to the DOM
            just in case, and visually hide it. And do not forget do remove it
            once you do not need it anymore.
            */
            input.onchange = function () {
                var file = this.files[0];

                var reader = new FileReader();
                reader.onload = function () {
                    /*
                    Note: Now we need to register the blob in TinyMCEs image blob
                    registry. In the next release this part hopefully won't be
                    necessary, as we are looking to handle it internally.
                    */
                    var id = 'blobid' + (new Date()).getTime();
                    var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                    var base64 = reader.result.split(',')[1];
                    var blobInfo = blobCache.create(id, file, base64);
                    blobCache.add(blobInfo);

                    /* call the callback and populate the Title field with the file name */
                    cb(blobInfo.blobUri(), {title: file.name});
                };
                reader.readAsDataURL(file);
            };
            input.click();
        },
        /*** image upload ***/

        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    });
});

//저장
// $("#save").on("click", function(){
//     var content = tinymce.activeEditor.getContent();
//     console.log(content);
// });

//에디터 모두 초기화
// $('.removeText').on('click', function(){
//     tinymce.activeEditor.selection.setContent('','<p>');
//     // var content = tinymce.activeEditor.getContent();
//     // console.log(content);
//     // console.log($('#tinymce').attr('data-id'));
//     // // Remove all editors
//     // text = '<p><br data-mce-bogus="1"></p>';
//     // $('#tinymce').html(text);
// });



$('.number1').bind('keyup mouseup', function (){
    console.log('ㅇ');
    console.log($('.recruitment').next().text());
    console.log($('.number1').val());
    console.log($('.number1').select());
    console.log($('.number1').val() > $('.number2').val());
    if($('.number1').val() > $('.number2').val()){
        $('form .invalid-feedback').css('display', 'block');
        $('.recruitment').next().show();
    }else{
        $('.recruitment').next().hide();
        $('form .invalid-feedback').css('display', 'none');
    }
});

$('.number2').bind('keyup mouseup', function (){
    console.log('ㅇ');
    if($('.number1').val() > $('.number2').val()){
        $('.recruitment').next().css('display', 'block');
        $('.recruitment').next().show();
    }else{
        $('.recruitment').next().hide();
        $('.recruitment').next().css('display', 'none');
    }
});

// $('.el-select .el-input').on('click', function(){
//     $('.el-select-dropdown__wrap').css('')
// });

// 임시 데이터
const data = [
    { date: '2022-10-15', content: '테스트1' },
    { date: '2022-10-03', content: '테스트2' },
    { date: '2022-10-15', content: '테스트3' },
    { date: '2022-10-26', content: '테스트4' },
    { date: '2022-10-21', content: '테스트5' },
];

// 데이터 가공
const calendarList = data.reduce(
    (acc, v) =>
        ({ ...acc, [v.date]: [...(acc[v.date] || []), v.content] })
    , {}
);

// pad method ( 2 -> 02 )
Number.prototype.pad = function() {
    return this > 9 ? this : '0' + this;
}

// 이번달 날짜 표시하기
for (let i = 1; i <= lastDay; i++) {
    // 날짜 지정 (YYYY-MM-DD)
    const date = `${currentYear}-${currentMonth.pad()}-${i.pad()}`;

    htmlDummy += `
    <div>
      ${i}
      <p>${calendarList[date]?.join('</p><p>') || ''}</p>
    </div>
  `;
}

