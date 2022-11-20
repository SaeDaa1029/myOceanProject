/*
* mySpace
* */


$('.writeTodo').on('click', function(){
    console.log('ddd');
    $('.inputWrap').slideToggle();
});

$('.noticeContentWrap .btnWrap a').on('click',function(){
    content = $(this).closest('.btnWrap').prev().children('.categoryAndDate').children('span').text();
    console.log(content);
    text = `<input type="text" style="border: solid 1px #98d8ec" value="${content}">`;
    console.log(`<input type="text" style="border: solid 1px #98d8ec" value="${content}">`);


    if($(this).text() === '수정'){
        console.log($(this).closest('.btnWrap').prev().children('.categoryAndDate'));
        $(this).closest('.btnWrap').prev().children('.categoryAndDate').children('span').replaceWith(text);
        $(this).text('변경');
        $(this).next().text('취소');
    }
    if($(this).text() === '삭제'){
        $(this).closest('.noticeContentWrap').remove();
    }

    if($(this).text() === '변경'){
        content = $(this).closest('.btnWrap').prev().children('.categoryAndDate').children('input').val();
        $(this).closest('.btnWrap').prev().replaceWith(`<span>${content}</span>`);
    }
    if($(this).text() === '취소'){
        $(this).closest('.btnWrap').prev().replaceWith(`<span>${content}</span>`);

    }
});
