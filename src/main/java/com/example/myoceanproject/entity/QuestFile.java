package com.example.myoceanproject.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "TBL_QUEST_FILE")
@Getter
@Setter
@ToString
public class QuestFile extends Period{
    @Id
    @GeneratedValue
    private Long questFileId; //PK
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "QUEST_ID")
    private Quest quest; //FK
    private String questFilePath;
    private String questFileOriginName;
//extend period

}
