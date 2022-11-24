package com.example.myoceanproject.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "TBL_QUEST_ACHIEVEMENT")
@Getter
@Setter
@ToString
public class QuestAchievement extends Period{

    @Id
    @GeneratedValue
    private Long questAchievementId; //PK
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user; //FK
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "QUEST_ID")
    private Quest quest; //FK
//extend period

}
