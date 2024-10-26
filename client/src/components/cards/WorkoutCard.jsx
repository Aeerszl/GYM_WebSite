import React from "react";
import styled from "styled-components";
import { FitnessCenterRounded, TimelapseRounded } from "@mui/icons-material";
import DeleteWorkoutComponent from "../deleteWorkout"; // Dosya adının doğru olduğundan emin olun

// Card bileşenine `position: relative` ekliyoruz
const Card = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 400px;
  padding: 16px 18px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${({ theme }) => theme.background_secondary};
  position: relative; /* Delete butonunun konumlandırılması için */
`;

const Category = styled.div`
  width: fit-content;
  font-size: 14px;
  color: ${({ theme }) => theme.primary};
  font-weight: 500;
  background: ${({ theme }) => theme.primary + 20};
  padding: 4px 10px;
  border-radius: 8px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Name = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 600;
`;
const Sets = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const WorkoutCard = ({ workout, onDelete }) => {
  return (
    <Card>
      <Header>
        <Category>#{workout?.category}</Category>
        <DeleteWorkoutComponent
          workoutName={workout?.workoutName}
          onDelete={onDelete} // onDelete prop'unu burada geçiyoruz
        />
      </Header>
      <Name>{workout?.workoutName}</Name>
      <Sets>
        Count: {workout?.sets} sets X {workout?.reps} reps
      </Sets>
      <Flex>
        <Details>
          <FitnessCenterRounded sx={{ fontSize: "20px" }} />
          {workout?.weight} kg
        </Details>
        <Details>
          <TimelapseRounded sx={{ fontSize: "20px" }} />
          {workout?.duration} min
        </Details>
      </Flex>
    </Card>
  );
};


export default WorkoutCard;