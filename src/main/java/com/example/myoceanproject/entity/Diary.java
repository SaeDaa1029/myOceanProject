package com.example.myoceanproject.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "TBL_DIARY")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Diary extends Period{
    @Id
    @GeneratedValue
    private Long diaryId; //PK
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private User senderUser;
    private String diaryTitle;
    private String diaryContent;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private User receiverUser;
//extend period

}
