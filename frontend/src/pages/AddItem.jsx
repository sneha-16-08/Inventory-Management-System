import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addItem } from "../services/itemService";

function AddItem() {

    const navigate = useNavigate();

    const [item, setItem] = useState({
        itemName: "",
        category: "",
        unitPrice: "",
        stockQuantity: "",
        supplierName: ""
    });

    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        });
    };

    const saveItem = (e) => {
        e.preventDefault();

        addItem(item)
            .then(() => {
                alert("Item Added Successfully");
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to Add Item");
            });
    };

    return (
        <div className="container">

            <div className="card mt-4">

                <div className="card-header bg-primary text-white">
                    <h3>Add Item</h3>
                </div>

                <div className="card-body">

                    <form onSubmit={saveItem}>

                        <div className="mb-3">
                            <label>Item Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="itemName"
                                value={item.itemName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Category</label>
                            <input
                                type="text"
                                className="form-control"
                                name="category"
                                value={item.category}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Unit Price</label>
                            <input
                                type="number"
                                className="form-control"
                                name="unitPrice"
                                value={item.unitPrice}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Stock Quantity</label>
                            <input
                                type="number"
                                className="form-control"
                                name="stockQuantity"
                                value={item.stockQuantity}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Supplier Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="supplierName"
                                value={item.supplierName}
                                onChange={handleChange}
                            />
                        </div>

                        <button className="btn btn-success">
                            Save Item
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default AddItem;