package com.rt.serviceimpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.rt.dto.ItemRequestDto;
import com.rt.dto.ItemResponseDto;
import com.rt.entity.Item;
import com.rt.exception.ItemNotFoundException;
import com.rt.mapper.ItemMapper;
import com.rt.repository.ItemRepository;
import com.rt.service.ItemService;

@Service
public class ItemServiceImpl implements ItemService {

    private final ItemRepository itemRepository;
    private final ItemMapper itemMapper;

    public ItemServiceImpl(ItemRepository itemRepository, ItemMapper itemMapper) {
        this.itemRepository = itemRepository;
        this.itemMapper = itemMapper;
    }

    @Override
    public ItemResponseDto addItem(ItemRequestDto requestDto) {

        Item item = itemMapper.toEntity(requestDto);

        Item savedItem = itemRepository.save(item);

        return itemMapper.toResponseDto(savedItem);
    }

    @Override
    public ItemResponseDto updateItem(Long itemId, ItemRequestDto requestDto) {

        Item item = itemRepository.findById(itemId)
                .orElseThrow(() -> new ItemNotFoundException("Item not found with ID : " + itemId));

        item.setItemName(requestDto.getItemName());
        item.setCategory(requestDto.getCategory());
        item.setUnitPrice(requestDto.getUnitPrice());
        item.setStockQuantity(requestDto.getStockQuantity());
        item.setSupplierName(requestDto.getSupplierName());

        Item updatedItem = itemRepository.save(item);

        return itemMapper.toResponseDto(updatedItem);
    }

    @Override
    public void deleteItem(Long itemId) {

        Item item = itemRepository.findById(itemId)
                .orElseThrow(() -> new ItemNotFoundException("Item not found with ID : " + itemId));

        itemRepository.delete(item);
    }

    @Override
    public ItemResponseDto getItemById(Long itemId) {

        Item item = itemRepository.findById(itemId)
                .orElseThrow(() -> new ItemNotFoundException("Item not found with ID : " + itemId));

        return itemMapper.toResponseDto(item);
    }

    @Override
    public List<ItemResponseDto> getAllItems() {

        return itemRepository.findAll()
                .stream()
                .map(itemMapper::toResponseDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<ItemResponseDto> searchByItemName(String itemName) {

        return itemRepository.findByItemNameContainingIgnoreCase(itemName)
                .stream()
                .map(itemMapper::toResponseDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<ItemResponseDto> searchByCategory(String category) {

        return itemRepository.findByCategoryContainingIgnoreCase(category)
                .stream()
                .map(itemMapper::toResponseDto)
                .collect(Collectors.toList());
    }
}