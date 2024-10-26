import React from "react";
import { deleteWorkout } from "../api/index"; // `deleteWorkout` fonksiyonunu doğru şekilde import edin
import styled from "styled-components";
import { Delete } from "@mui/icons-material";

const DeleteButton = styled.button`
  position: absolute; /* Sağ üst köşeye sabitlemek için */
  top: 10px;
  right: 10px;
  background-color: rgba(255, 0, 0, 0.2); /* Şeffaf kırmızı arka plan */
  border: none;
  border-radius: 50%; /* Yuvarlak buton */
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 0, 0, 0.5); /* Üzerine gelince koyulaşır */
  }
`;

const DeleteWorkoutComponent = ({ workoutName, onDelete }) => {
  const handleDelete = async () => {
    // Kullanıcıdan onay alma
    const confirmation = window.confirm(
      `Are you sure you want to delete the workout "${workoutName}"?`
    );
    
    // Onay alınmazsa işlem durduruluyor
    if (!confirmation) return; 

    try {
      const token = localStorage.getItem("fittrack-app-token");
      await deleteWorkout(token, workoutName);
      if (onDelete) {
        onDelete(workoutName); // Silme işlemi sonrası onDelete fonksiyonu çağrılıyor
      }
    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  };

  return (
    <DeleteButton onClick={handleDelete}>
      <Delete style={{ color: "red" }} /> {/* Çöp kutusu ikonunun rengi kırmızı */}
    </DeleteButton>
  );
};

export default DeleteWorkoutComponent;
