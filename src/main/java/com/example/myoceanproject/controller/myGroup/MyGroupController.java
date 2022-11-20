package com.example.myoceanproject.controller.myGroup;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/myGroup/*")
public class MyGroupController {
    // 내가 참여한 모임 페이지
    @GetMapping("/joinGroup")
    public String joingroup(){
        return "app/myGroup/myJoinGroup";
    }

    // 내가 오픈한 모임 페이지
    @GetMapping("/openGroup")
    public String opengroup(){
        return "app/myGroup/myOpenGroup";
    }
}
