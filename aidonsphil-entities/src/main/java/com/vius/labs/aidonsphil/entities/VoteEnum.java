package com.vius.labs.aidonsphil.entities;

/**
 * Created by emma on 06/12/16.
 */
public enum VoteEnum {
    OUI((byte)1), NON((byte)-1);

    private final byte value;

    private VoteEnum(byte val){
        this.value = val;
    }
}
