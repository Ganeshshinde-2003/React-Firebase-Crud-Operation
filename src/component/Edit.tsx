import React, { useState } from "react";
import { updateHotel } from "../lib/controller";
import { Navigate, useNavigate } from "react-router-dom";

interface IProps {
  editDesription: Boolean;
  setEditDescription: React.Dispatch<React.SetStateAction<boolean>>;
  id?: String;
}

function Edit({ editDesription, setEditDescription, id }: IProps) {
  const [newDes, setNewDes] = useState("");
  const navigate = useNavigate();
  const handleUpdate = () => {
    if (newDes !== "") {
      updateHotel(id, { description: newDes });
      setEditDescription(!editDesription);
      navigate("/");
    }
  };
  return (
    <div className="edit">
      <label>Please enter the new hotel description</label>
      <textarea
        required
        name="description"
        id="description"
        rows={5}
        value={newDes}
        onChange={(e) => {
          setNewDes(e.target.value);
        }}
      />
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
