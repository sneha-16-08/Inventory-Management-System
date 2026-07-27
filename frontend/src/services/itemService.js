import axios from "axios";

const API_URL = "http://localhost:8081/api/items";


// Get All Items
export const getAllItems = () => {
    return axios.get(API_URL);
};


// Get Item By Id
export const getItemById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};


// Add Item
export const addItem = (item) => {
    return axios.post(API_URL, item);
};


// Update Item
export const updateItem = (id, item) => {
    return axios.put(`${API_URL}/${id}`, item);
};


// Delete Item
export const deleteItem = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};


// Search By Item Name
export const searchByItemName = (itemName) => {
    return axios.get(
        `${API_URL}/search/name?itemName=${itemName}`
    );
};


// Search By Category
export const searchByCategory = (category) => {
    return axios.get(
        `${API_URL}/search/category?category=${category}`
    );
};