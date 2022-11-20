const $detailBtn = $(".jJfiPr");
const $postdetail = $(".DescriptionSection__DescriptionContainer-sc-1vvzceq-0 ")

$detailBtn.click(function () {
    if($postdetail.hasClass("edqUZK")){
        $postdetail.removeClass("edqUZK").addClass("PvHzG");
        $(this).find("span").text("간략히");
        $(this).find("div").removeClass("QiNdM").addClass("dOJyMf")
    }else{
        $postdetail.removeClass("PvHzG").addClass("edqUZK");
        $(this).find("span").text("상세정보 더보기");
        $(this).find("div").removeClass("dOJyMf").addClass("QiNdM")
    }

})