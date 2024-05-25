import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleClear() {
    let confirmed = false;
    if (items.length !== 0) {
      confirmed = window.confirm(
        "Are you sure to delete all the items from your list"
      );
    }
    if (confirmed) setItems([]);
  }
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        handleClear={handleClear}
        onDeleteItem={handleDeleteItem}
        items={items}
        onToggleItems={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
