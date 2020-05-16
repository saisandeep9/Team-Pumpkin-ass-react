import React from "react";

const ListGroup = ({ items, onSelectItem, selectedItem }) => {
  return (
    <div>
      <ul className="list-group mt-3 ml-1">
        {items.map((item) => (
          <li
            key={item._id}
            className={
              item._id === selectedItem._id
                ? "list-group-item active"
                : "list-group-item "
            }
            onClick={() => onSelectItem(item)}
          >
            {item.categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
