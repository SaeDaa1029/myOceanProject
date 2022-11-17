
const $nav = $("nav.ciqvqE");
const $section = $("section.lkrzmV");
const $windowWidth = $(window).width();

checkWidth();

function checkWidth(){
    if($windowWidth<769){
        $("header").attr("class", "GlobalNavigationBar__Wrapper-og74wb-0 bHgsOZ");
        $(".fqlSHx").hide(); //카테고리 가리기
        $(".cRoOrU").hide(); //카테고리 옆 선 가리기
        $(".kiAeGP").hide(); //피드/저장/마이 가리기
        $nav.css("display", "flex");
        $nav.show();
        //$section.hide();
        $section.css("display", "none");
    } else{
        $("header").attr("class", "GlobalNavigationBar__Wrapper-og74wb-0 dPJHWR");
        $(".fqlSHx").show(); //카테고리
        $(".cRoOrU").show(); //카테고리 옆 선 가리기
        $(".kiAeGP").show(); //피드/저장/마이
        $(".lQqkn").show();
        $nav.hide();
        $section.show();
    }
}

$(window).resize(function() {
    if (window.innerWidth < 769) {
        $("header").attr("class", "GlobalNavigationBar__Wrapper-og74wb-0 bHgsOZ");
        $(".fqlSHx").hide(); //카테고리 가리기
        $(".cRoOrU").hide(); //카테고리 옆 선 가리기
        $(".kiAeGP").hide(); //피드/저장/마이 가리기
        $nav.css("display", "flex");
        $nav.show();
        //$section.hide();
        $section.css("display", "none");
    } else{
        $("header").attr("class", "GlobalNavigationBar__Wrapper-og74wb-0 dPJHWR");
        $(".fqlSHx").show(); //카테고리
        $(".cRoOrU").show(); //카테고리 옆 선 가리기
        $(".kiAeGP").show(); //피드/저장/마이
        $(".lQqkn").show();
        $nav.hide();
        $section.show();
    }
});