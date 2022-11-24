package com.example.myoceanproject.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "TBL_USER_FILE")
@Getter
@Setter
@ToString
@NoArgsConstructor
public class UserFile extends Period{

    @Id
    @GeneratedValue
    private Long userFileId; //PK

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID")
    private User user; //FK

    private String userFilePath;

    private String userFileOriginName;
//extend period


}
