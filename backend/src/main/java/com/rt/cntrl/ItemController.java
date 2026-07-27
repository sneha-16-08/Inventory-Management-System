package com.rt.cntrl;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.rt.dto.ItemRequestDto;
import com.rt.dto.ItemResponseDto;
import com.rt.service.ItemService;

@RestController
@RequestMapping("/api/items")
@CrossOrigin(origins = "*")
public class ItemController {

    private final ItemService itemService;

    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    // Add Item
    @PostMapping
    public ResponseEntity<ItemResponseDto> addItem(@Valid @RequestBody ItemRequestDto dto) {
        return new ResponseEntity<>(itemService.addItem(dto), HttpStatus.CREATED);
    }

    // Update Item
    @PutMapping("/{id}")
    public ResponseEntity<ItemResponseDto> updateItem(
            @PathVariable Long id,
            @Valid @RequestBody ItemRequestDto dto) {

        return ResponseEntity.ok(itemService.updateItem(id, dto));
    }

    // Delete Item
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteItem(@PathVariable Long id) {

        itemService.deleteItem(id);
        return ResponseEntity.ok("Item Deleted Successfully");
    }

    // Get Item By Id
    @GetMapping("/{id}")
    public ResponseEntity<ItemResponseDto> getItemById(@PathVariable Long id) {

        return ResponseEntity.ok(itemService.getItemById(id));
    }

    // Get All Items
    @GetMapping
    public ResponseEntity<List<ItemResponseDto>> getAllItems() {

        return ResponseEntity.ok(itemService.getAllItems());
    }

    // Search By Item Name
    @GetMapping("/search/name")
    public ResponseEntity<List<ItemResponseDto>> searchByItemName(
            @RequestParam String itemName) {

        return ResponseEntity.ok(itemService.searchByItemName(itemName));
    }

    // Search By Category
    @GetMapping("/search/category")
    public ResponseEntity<List<ItemResponseDto>> searchByCategory(
            @RequestParam String category) {

        return ResponseEntity.ok(itemService.searchByCategory(category));
    }
}