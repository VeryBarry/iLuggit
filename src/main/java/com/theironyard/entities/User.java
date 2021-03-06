package com.theironyard.entities;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

/**
 * Created by VeryBarry on 11/16/16.
 */
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue
    public int id;
    @Column(nullable = false, unique = true)
    String useruser;
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @Column(nullable = false)
    String password;
    @Column(nullable = false)
    String first_name;
    @Column(nullable = false)
    String last_name;
    @Column(nullable = false)
    String email;
    @Column(nullable = false)
    String phone_number;

    public User() {
    }

    public User(String useruser, String password, String first_name, String last_name, String email, String phone_number) {
        this.useruser = useruser;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.phone_number = phone_number;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUseruser() {
        return useruser;
    }

    public void setUseruser(String useruser) {
        this.useruser = useruser;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }
}