import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllItems, deleteItem } from "../services/itemService";

function InventoryList() {

    const [items, setItems] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = () => {
        getAllItems()
            .then((response) => {
                setItems(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const removeItem = (id) => {

        if (window.confirm("Are you sure you want to delete this item?")) {

            deleteItem(id)
                .then(() => {
                    alert("Item Deleted Successfully");
                    loadItems();
                })
                .catch((error) => {
                    console.log(error);
                    alert("Failed to Delete Item");
                });

        }
    };

    const editItem = (id) => {
        navigate(`/update/${id}`);
    };

    return (
        <div className="card shadow">

            <div className="card-header bg-primary text-white">
                <h3 className="mb-0">Inventory Items</h3>
            </div>

            <div className="card-body">

                <table className="table table-bordered table-hover">

                    <thead className="table-primary">

                        <tr>
                            <th>ID</th>
                            <th>Item Name</th>
                            <th>Category</th>
                            <th>Unit Price</th>
                            <th>Stock Quantity</th>
                            <th>Supplier Name</th>
                            <th width="180">Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {
                            items.length > 0 ?

                                items.map((item) => (

                                    <tr key={item.itemId}>

                                        <td>{item.itemId}</td>
                                        <td>{item.itemName}</td>
                                        <td>{item.category}</td>
                                        <td>{item.unitPrice}</td>
                                        <td>{item.stockQuantity}</td>
                                        <td>{item.supplierName}</td>

                                        <td>

                                            <button
                                                className="btn btn-primary btn-sm me-2"
                                                onClick={() => editItem(item.itemId)}
                                            >
                                                Edit
                                            </button>

                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => removeItem(item.itemId)}
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))

                                :

                                <tr>
                                    <td colSpan="7" className="text-center">
                                        No Items Found
                                    </td>
                                </tr>

                        }

                    </tbody>

                </table>

            </div>

        </div>
    );

}

export default InventoryList;