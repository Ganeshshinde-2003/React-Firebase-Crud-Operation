import React, { useState } from "react";

interface IProps {
  editDesription: Boolean;
  setEditDescription: React.Dispatch<React.SetStateAction<boolean>>;
}

function Edit({ editDesription, setEditDescription }: IProps) {
  const [newDes, setNewDes] = useState("");
  const handleUpdate = () => {
    setEditDescription(!editDesription);
  };
  return (
    <div className="edit">
      <label>Please enter the new hotel description</label>
      <textarea
        required
        name="description"
        id="description"
        value={newDes}
        onChange={(e) => {
          setNewDes(newDes);
        }}
      ></textarea>
      <button
        className="update-button"
        onClick={() => {
          handleUpdate();
        }}
      >
        Update Hotel
      </button>
    </div>
  );
}

export default Edit;
