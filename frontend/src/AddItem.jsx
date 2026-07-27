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

        <div className="card shadow">

            <div className="card-header bg-primary text-white">

                <h3 className="mb-0">Add New Item</h3>

            </div>

            <div className="card-body">

                <form onSubmit={saveItem}>

                    <div className="mb-3">

                        <label className="form-label">Item Name</label>

                        <input
                            type="text"
                            className="form-control"
                            name="itemName"
                            value={item.itemName}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">Category</label>

                        <input
                            type="text"
                            className="form-control"
                            name="category"
                            value={item.category}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">Unit Price</label>

                        <input
                            type="number"
                            className="form-control"
                            name="unitPrice"
                            value={item.unitPrice}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">Stock Quantity</label>

                        <input
                            type="number"
                            className="form-control"
                            name="stockQuantity"
                            value={item.stockQuantity}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">Supplier Name</label>

                        <input
                            type="text"
                            className="form-control"
                            name="supplierName"
                            value={item.supplierName}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Save Item
                    </button>

                </form>

            </div>

        </div>

    );

}

export default AddItem;