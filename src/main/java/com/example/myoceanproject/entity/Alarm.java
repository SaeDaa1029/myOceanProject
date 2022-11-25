package com.example.myoceanproject.entity;

import com.example.myoceanproject.type.ReadStatus;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "TBL_ALARM")
@Getter
@Setter
@ToString
public class Alarm extends Period{

    @Id
    @GeneratedValue
    private Long alarmId; //PK
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user; //FK
    private String alarmContent;
    private LocalDateTime alarmDate;
    private ReadStatus readStatus; //Enum

}
