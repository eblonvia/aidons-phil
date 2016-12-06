package com.vius.labs.aidonsphil.entities;

import java.io.Serializable;

/**
 * Created by emma on 06/12/16.
 */
public class Meal implements Serializable{
    private long id;
    private String name;
    private String description;


    public Meal() {}

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
