
const $filterBtn = $(".jJIWoq")
$filterBtn.click(function () {
    if($(this).find("button").hasClass('fFBpBV')){
        var text= $(this).find("button").text();
        $(this).find("button").removeClass('fFBpBV').addClass("kJEnf");
        $(this).find("button").text("적용됨");
        $(this).children().append(`<input type="hidden" value="`+text+`">`)
        $(this).children().append('<button height="18px" class="Button-bqxlp0-0 FilterOpenButton__CloseButton-sc-91gci-1 gRNDCb"><img src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'18\' height=\'18\' viewBox=\'0 0 18 18\'%3E %3Cg fill=\'none\' fill-rule=\'nonzero\' stroke=\'%23DDD\' stroke-linecap=\'square\'%3E %3Cpath d=\'M11.828 6.172l-5.656 5.656M11.828 11.828L6.172 6.172\'/%3E %3C/g%3E %3C/svg%3E" class="FilterOpenButton__CloseIcon-sc-91gci-2 hnfyOW"></button>')
    }else{
        var text = $(this).find("input[type='hidden']").val();
        $(this).empty();
        $(this).append(`<div class="FilterOpenButton__Wrapper-sc-91gci-0 NVKNq">
                    <button height="auto" color="initial" font-size="14px" font-weight="500" class="Button-bqxlp0-0 fFBpBV">`+text+`</button>
                </div>`)
    }
})


$(".lbwitP").click(function () {
    $("#modal-root").css("display","block");
})

$(".ActionSheet__Container-akkdcx-0").click(function (e) {
    if($(e.target).parents(".ActionSheet__Content-akkdcx-2").length < 1){
        $("#modal-root").css("display","none");
    }
})

const $warnBtn = $('#modal-root').find(".Default__Wrapper-sc-7insrf-0");

$warnBtn.click(function () {
    alert("들어옴")
})


/*
$('html').click(function (e) {
    if($(e.target).parents('.ActionSheet__Content-akkdcx-2').length<1){
        $("#modal-root").css("display","none");
    }
})*/
