package com.example.myoceanproject.controller.myQuest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/myQuest/*")
public class MyQuestController {
    // 완료한 퀘스트 페이지
    @GetMapping("/completeQuest")
    public String completequest(){
        return "app/myQuest/completeQuest";
    }

    // 획득한 벳지 페이지
    @GetMapping("/myBadge")
    public String mybadge(){
        return "app/myQuest/myBadge";
    }

    // 오늘의 퀘스트 페이지
    @GetMapping("/todayQuest")
    public String todayquest(){
        return "app/myQuest/todayQuest";
    }

}
