import { Link } from "react-router-dom";

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">

            <div className="container">

                <Link className="navbar-brand fw-bold" to="/">
                    Inventory Management System
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">

                            <Link className="nav-link" to="/">
                                Inventory List
                            </Link>

                        </li>

                        <li className="nav-item">

                            <Link className="nav-link" to="/add">
                                Add Item
                            </Link>

                        </li>

                        <li className="nav-item">

                            <Link className="nav-link" to="/search">
                                Search Item
                            </Link>

                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    );
}

export default Navbar;