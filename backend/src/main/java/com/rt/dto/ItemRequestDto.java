package com.rt.dto;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

import lombok.Data;

@Data
public class ItemRequestDto {

    @NotBlank(message = "Item Name cannot be empty")
    private String itemName;

    @NotBlank(message = "Category cannot be empty")
    private String category;

    @Positive(message = "Unit Price must be greater than 0")
    private Double unitPrice;

    @Min(value = 0, message = "Stock Quantity cannot be negative")
    private Integer stockQuantity;

    @NotBlank(message = "Supplier Name cannot be empty")
    private String supplierName;
}