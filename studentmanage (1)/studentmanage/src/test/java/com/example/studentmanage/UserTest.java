package com.example.studentmanage;


import com.example.studentmanage.model.User;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class UserTest {



    @Test
    public void testGetName() {
        User user = new User();
        user.setName("Mudipa");
        assertEquals("kishan", user.getName());
    }

    @Test
    public void testGetUsername() {
        User user = new User();
        user.setUsername("kishan");
        assertEquals("kishan", user.getUsername());
    }

    @Test
    public void testGetEmail() {
        User user = new User();
        user.setEmail("mudipakishan@gmail.com");
        assertEquals("mudipakishan@gmail.com", user.getEmail());
    }





}
