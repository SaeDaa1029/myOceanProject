package com.example.myoceanproject.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "TBL_GROUP_SCHEDULE")
@Getter
@Setter
@ToString
public class GroupSchedule extends Period{
    @Id
    @GeneratedValue
    private Long groupScheduleId; //PK
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "GROUP_ID")
    private Group group; //FK
    private LocalDateTime groupScheduleDate;
    private LocalDateTime groupScheduleStartTime;
    private LocalDateTime groupScheduleEndTime;
//extend period

}
