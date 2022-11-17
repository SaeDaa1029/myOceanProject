const $header = $("#header");
const $footer = $("#footer");
const $category = $("#category");


//헤더 푸터 연결
$header.load("/templates/fix/header.html");
$footer.load("/templates/fix/footer.html");

// 카테고리 연결
$category.load("/templates/myList/myList.html");