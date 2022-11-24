package com.example.myoceanproject.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Table(name = "TBL_QUEST")
@Getter
@Setter
@ToString
public class Quest extends Period{
    @Id
    @GeneratedValue
    private long questId; //PK
    private String questCategory;
    private String questName;
    private String questContent;
    private LocalDateTime questDeadLine;
    private String questFilePath;
    private String questFileOriginName;
//extend period


}
