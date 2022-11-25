package com.example.myoceanproject.entity;

import com.example.myoceanproject.type.AskCategory;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "TBL_ASK")
@Getter
@Setter
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Ask extends Period{
    @Id
    @GeneratedValue
    private Long askId;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user;//유저가 null일 경우 자주 묻는 질문
    private String askStatus;
    private String askTitle;
    private String askContent;
    private AskCategory askCategory;



}