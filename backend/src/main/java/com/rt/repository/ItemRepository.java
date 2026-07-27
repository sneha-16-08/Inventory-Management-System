package com.rt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rt.entity.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {

    List<Item> findByItemNameContainingIgnoreCase(String itemName);

    List<Item> findByCategoryContainingIgnoreCase(String category);

}