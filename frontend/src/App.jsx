import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import InventoryList from "./pages/InventoryList";
import AddItem from "./pages/AddItem";
import UpdateItem from "./pages/UpdateItem";
import SearchItem from "./pages/SearchItem";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<InventoryList />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="/update/:id" element={<UpdateItem />} />
          <Route path="/search" element={<SearchItem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;