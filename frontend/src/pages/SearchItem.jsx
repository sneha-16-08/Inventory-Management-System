import { useState } from "react";
import { searchByItemName, searchByCategory } from "../services/itemService";

function SearchItem() {

    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("");
    const [items, setItems] = useState([]);

    const searchName = () => {

        if (itemName.trim() === "") {
            alert("Enter Item Name");
            return;
        }

        searchByItemName(itemName)
            .then((response) => {
                setItems(response.data);
            })
            .catch((error) => {
                console.log(error);
                alert("No Items Found");
            });

    };

    const searchCategoryData = () => {

        if (category.trim() === "") {
            alert("Enter Category");
            return;
        }

        searchByCategory(category)
            .then((response) => {
                setItems(response.data);
            })
            .catch((error) => {
                console.log(error);
                alert("No Items Found");
            });

    };

    return (

        <div className="card shadow">

            <div className="card-header bg-primary text-white">
                <h3 className="mb-0">Search Items</h3>
            </div>

            <div className="card-body">

                <div className="row mb-4">

                    <div className="col-md-5">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Item Name"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                        />

                    </div>

                    <div className="col-md-2">

                        <button
                            className="btn btn-primary w-100"
                            onClick={searchName}
                        >
                            Search
                        </button>

                    </div>

                </div>

                <div className="row mb-4">

                    <div className="col-md-5">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />

                    </div>

                    <div className="col-md-2">

                        <button
                            className="btn btn-primary w-100"
                            onClick={searchCategoryData}
                        >
                            Search
                        </button>

                    </div>

                </div>

                <table className="table table-bordered table-hover">

                    <thead className="table-primary">

                        <tr>
                            <th>ID</th>
                            <th>Item Name</th>
                            <th>Category</th>
                            <th>Unit Price</th>
                            <th>Stock Quantity</th>
                            <th>Supplier Name</th>
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

                                    </tr>

                                ))

                                :

                                <tr>

                                    <td colSpan="6" className="text-center">
                                        No Data Found
                                    </td>

                                </tr>

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );
}

export default SearchItem;