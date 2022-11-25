package com.example.myoceanproject.entity;

import com.example.myoceanproject.type.ReadStatus;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "TBL_CHATTING")
@Getter
@Setter
@ToString
public class Chatting extends Period{
    @Id
    @GeneratedValue
    private Long chattingId;//PK

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "GROUP_ID")
    private Group group;//FK

    private String chattingContent;

    private ReadStatus readStatus;
//extend period


}
