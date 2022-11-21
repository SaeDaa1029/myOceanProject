
checkMedia();

$(window).resize(function(){
    if(window.innerWidth<769){
        $(".ProductList__ProductWrapper-sc-1lo0q2y-0").attr("class", "ProductList__ProductWrapper-sc-1lo0q2y-0 boEfRG");
    } else{
        $(".ProductList__ProductWrapper-sc-1lo0q2y-0").attr("class", "ProductList__ProductWrapper-sc-1lo0q2y-0 boEfOZ");
    }
})

function checkMedia(){
    if(window.innerWidth<769){
        $(".ProductList__ProductWrapper-sc-1lo0q2y-0").attr("class", "ProductList__ProductWrapper-sc-1lo0q2y-0 boEfRG");
    } else{
        $(".ProductList__ProductWrapper-sc-1lo0q2y-0").attr("class", "ProductList__ProductWrapper-sc-1lo0q2y-0 boEfOZ");
    }

}
