package com.rt.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "items")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long itemId;

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