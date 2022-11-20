package com.example.myoceanproject.controller.questionBoard;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/questionBoard/*")
public class QusetionBoardController {
    // 자주 묻는 질문 페이지
    @GetMapping("/index")
    public String questionboard(){
        return "app/questionBoard/questionBoard";
    }
}
