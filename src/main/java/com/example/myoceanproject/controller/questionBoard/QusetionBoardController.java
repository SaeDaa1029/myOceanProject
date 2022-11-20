package com.example.myoceanproject.controller.questionBoard;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/questionBoard/*")
public class QusetionBoardController {
    // 자주 묻는 질문 페이지
    @GetMapping("/index")
    public String questionBoard(){
        return "app/questionBoard/questionBoard";
    }

    @GetMapping("myQuestion")
    public String myQuestionBoard(){return "app/questionBoard/myQuestion";}

    @GetMapping("myQuestionWrite")
    public String myQuestionWrite(){return "app/questionBoard/myQuestionWrite";}

    @GetMapping("managerAnswer")
    public String managerAnswer(){return "app/questionBoard/managerAnswer";}
}
