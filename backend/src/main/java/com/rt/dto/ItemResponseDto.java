package com.rt.dto;

import lombok.Data;

@Data
public class ItemResponseDto {

    private Long itemId;
    private String itemName;
    private String category;
    private Double unitPrice;
    private Integer stockQuantity;
    private String supplierName;
}