
const $filterBtn = $(".jJIWoq")

$filterBtn.click(function () {
    let text= $(this).text().trim();
    if($(this).find("button").hasClass('fFBpBV')) {
        $(this).find("button").removeClass('fFBpBV').addClass("kJEnf");
        $(this).children().append('<button height="18px" class="Button-bqxlp0-0 FilterOpenButton__CloseButton-sc-91gci-1 gRNDCb"><img src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'18\' height=\'18\' viewBox=\'0 0 18 18\'%3E %3Cg fill=\'none\' fill-rule=\'nonzero\' stroke=\'%23DDD\' stroke-linecap=\'square\'%3E %3Cpath d=\'M11.828 6.172l-5.656 5.656M11.828 11.828L6.172 6.172\'/%3E %3C/g%3E %3C/svg%3E" class="FilterOpenButton__CloseIcon-sc-91gci-2 hnfyOW"></button>')

    }else{
        $(this).empty();
        $(this).append(`<div class="FilterOpenButton__Wrapper-sc-91gci-0 NVKNq">
                    <button height="auto" color="initial" font-size="14px" font-weight="500" class="Button-bqxlp0-0 fFBpBV">`+text+`</button>
                </div>`)
    }
})

//모달

const $modal = $("#modal-root")
const $modalCancelBtn = $(".kXWQPc");
$(".lbwitP").click(function () {
    $("#modal-root").css("display","block");
})

$modalCancelBtn.click(function () {
    $modal.css("display","none");
})


//페이지 소개 모달

const $pageIntroduceModal = $("#modal-page");
const $pageIntroduceBtn = $(".cUtFFV");

$pageIntroduceBtn.click(function () {
    $pageIntroduceModal.css("display","block")
})


$(".pageIntroduce_modalContainer_1h").click(function (e) {
    if($(e.target).parents(".pageIntroduce_Container_1h").length < 1){
        $pageIntroduceModal.css("display","none");
    }
})
