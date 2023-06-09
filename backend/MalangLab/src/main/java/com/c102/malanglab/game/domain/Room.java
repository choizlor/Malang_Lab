package com.c102.malanglab.game.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Table(name = "room")
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Room {
    @Id
    @Column(name = "ROOM_ID")
    private Long id;

    @Column(name = "ROOM_NAME")
    private String name;
    @Column(name = "HOST_ID")
    private String hostId;

    @Column(name = "MODE")
    @Enumerated(value = EnumType.STRING)
    private GameMode mode;

    @Column(name = "TOTAL_ROUND")
    private Integer totalRound;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "ROOM_ID")
    private List<Setting> settings = new ArrayList<>();

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "room")
    @JsonManagedReference
    private List<Guest> guests = new ArrayList<>();

    public Room(String name, String hostId, GameMode mode, int totalRound, List<Setting> settings) {
        this.name = name;
        this.hostId = hostId;
        this.mode = mode;
        this.totalRound = totalRound;
        this.settings = settings;
    }

    public void addGuest(Guest guest) {
        this.guests.add(guest);
        if (guest.getRoom() != this) {
            guest.setRoom(this);
        }
    }

}