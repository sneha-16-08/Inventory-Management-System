import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getItemById, updateItem } from "../services/itemService";

function UpdateItem() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [item, setItem] = useState({
        itemName: "",
        category: "",
        unitPrice: "",
        stockQuantity: "",
        supplierName: ""
    });

    useEffect(() => {
        loadItem();
    }, []);

    const loadItem = () => {
        getItemById(id)
            .then((response) => {
                setItem(response.data);
            })
            .catch((error) => {
                console.log(error);
                alert("Item Not Found");
            });
    };

    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        });
    };

    const updateInventoryItem = (e) => {
        e.preventDefault();

        updateItem(id, item)
            .then(() => {
                alert("Item Updated Successfully");
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to Update Item");
            });
    };

    return (
        <div className="card shadow">

            <div className="card-header bg-primary text-white">
                <h3 className="mb-0">Update Item</h3>
            </div>

            <div className="card-body">

                <form onSubmit={updateInventoryItem}>

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

                    <button className="btn btn-primary">
                        Update Item
                    </button>

                </form>

            </div>

        </div>
    );
}

export default UpdateItem;