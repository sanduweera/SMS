package com.codewithSI.fullstackbackend.repository;

import com.codewithSI.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
