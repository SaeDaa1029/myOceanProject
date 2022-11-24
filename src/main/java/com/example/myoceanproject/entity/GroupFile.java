package com.example.myoceanproject.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "TBL_GROUP_FILE")
@Getter
@Setter
@ToString
public class GroupFile extends Period{

    @Id
    @GeneratedValue
    private Long groupFileId; //PK
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "GROUP_ID")
    private Group group; //FK
    private String groupFilePath;
    private String groupOriginName;
//extend period


}
