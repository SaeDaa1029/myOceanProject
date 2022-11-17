package com.example.myoceanproject.controller.join;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/join/*")
public class JoinController {
    // 첫번째 회원가입 페이지
    @GetMapping("/joinone")
    public String joinone(){
        return "app/Join/before_join";
    }

    // 두번째 회원가입 페이지
    @GetMapping("/jointwo")
    public String jointwo(){
        return "app/Join/join_in";
    }

    // 세번째 회원가입 페이지
    @GetMapping("/jointhree")
    public String jointhree(){
        return "app/Join/join_in_second";
    }

}
