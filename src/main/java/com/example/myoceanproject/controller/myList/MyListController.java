package com.example.myoceanproject.controller.myList;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/mylist/*")
public class MyListController {
    // 내가 쓴 일기 페이지
    @GetMapping("/mydiary")
    public String mydiary(){
        return "app/myList/myDiary";
    }

    // 내가 보낸 교환일기 페이지
    @GetMapping("/myexchangediary")
    public String myexchangediary(){
        return "app/myList/myExchangeDiary";
    }

    // 카테고리 ( 합치는 부분!)
    @GetMapping("/mylistcategory")
    public String mylistcategory(){
        return "app/myList/myList";
    }

    //  책 이야기
    @GetMapping("/mylistbook")
    public String mylistbook(){
        return "app/myList/myListBookBoard";
    }

    //  요리 이야기
    @GetMapping("/mylistcook")
    public String mylistcook(){
        return "app/myList/myListCookBoard";
    }

    //  고민상담
    @GetMapping("/mylistcounseling")
    public String mylistcounseling(){
        return "app/myList/myListCounselingBoard";
    }

    //  운동 이야기
    @GetMapping("/mylistexercise")
    public String mylistexercise(){
        return "app/myList/myListExerciseBoard";
    }

    // 자유게시판
    @GetMapping("/mylistfree")
    public String mylistfree(){
        return "app/myList/myListFreeBoard";
    }

    // 영화이야기
    @GetMapping("/mylistmovie")
    public String mylistmovie(){
        return "app/myList/myListMovieBoard";
    }

    // 게시글 없는 페이지 표시할때!
    @GetMapping("/mylistnocontents")
    public String mylistnocontents(){
        return "app/myList/myListNoContents";
    }

    // 내가 쓴 게시글 (전체)
    @GetMapping("/mylisttotal")
    public String mylisttotal(){
        return "app/myList/myListTotal";
    }



}
