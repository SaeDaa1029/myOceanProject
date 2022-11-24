package com.example.myoceanproject.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "TBL_GROUP")
@Getter
@Setter
@ToString
public class Group extends Period{

    @Id
    @GeneratedValue
    private Long groupId; //PK
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user; //FK
    private String groupName;
    private String groupCategory; //직접 입력임. 선택x
    private String groupContent;
    private int groupPoint;
    private String groupLocation;
    private String groupLocationType; //Enum
    private String groupStatus; //Enum
    private String thumbNailPath;
    private String thumbNailOriginName;
//extend period

}
