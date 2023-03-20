package com.example.studentmanage.repository;

import com.example.studentmanage.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
