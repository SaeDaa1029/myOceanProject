package com.example.myoceanproject.controller.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/login/*")
public class LoginController {

    // 로그인 페이지
    @GetMapping("/index")
    public String login(){
        return "app/login/login";
    }
}
