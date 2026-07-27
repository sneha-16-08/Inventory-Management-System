package com.rt.service;

import java.util.List;

import com.rt.dto.ItemRequestDto;
import com.rt.dto.ItemResponseDto;

public interface ItemService {

    ItemResponseDto addItem(ItemRequestDto requestDto);

    ItemResponseDto updateItem(Long itemId, ItemRequestDto requestDto);

    void deleteItem(Long itemId);

    ItemResponseDto getItemById(Long itemId);

    List<ItemResponseDto> getAllItems();

    List<ItemResponseDto> searchByItemName(String itemName);

    List<ItemResponseDto> searchByCategory(String category);

}