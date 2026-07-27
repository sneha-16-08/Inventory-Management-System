package com.rt.mapper;

import org.springframework.stereotype.Component;

import com.rt.dto.ItemRequestDto;
import com.rt.dto.ItemResponseDto;
import com.rt.entity.Item;

@Component
public class ItemMapper {

    // Convert Request DTO to Entity
    public Item toEntity(ItemRequestDto dto) {

        Item item = new Item();

        item.setItemName(dto.getItemName());
        item.setCategory(dto.getCategory());
        item.setUnitPrice(dto.getUnitPrice());
        item.setStockQuantity(dto.getStockQuantity());
        item.setSupplierName(dto.getSupplierName());

        return item;
    }

    // Convert Entity to Response DTO
    public ItemResponseDto toResponseDto(Item item) {

        ItemResponseDto dto = new ItemResponseDto();

        dto.setItemId(item.getItemId());
        dto.setItemName(item.getItemName());
        dto.setCategory(item.getCategory());
        dto.setUnitPrice(item.getUnitPrice());
        dto.setStockQuantity(item.getStockQuantity());
        dto.setSupplierName(item.getSupplierName());

        return dto;
    }
}