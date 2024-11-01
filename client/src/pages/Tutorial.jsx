import React, { useState } from 'react';
import { Container, TextField, Typography, Box, Button,Grid } from '@mui/material';
import { lightTheme } from '../utils/Themes';
import styled from 'styled-components';

import exerciseBg from '../utils/Images/Antrenman.jpg'; 
import kaloriBg from '../utils/Images/kalori.jpg'; 
import Karikatur from '../utils/Images/StickMan.jpg';

import biceps_curl from '../utils/Images/Bicep_Curl.jpg';
import hammer_curl from '../utils/Images/Hammer.jpg';
import triceps_dip from '../utils/Images/triceps_dip.jpg';
import skull_crusher from '../utils/Images/skull_crusher.jpg';
import dumbbell_kickback from '../utils/Images/dumbbell_kickback.jpg';
import cable_curl from '../utils/Images/cable_curl.jpg';
import close_grip from '../utils/Images/close-grip-bench-press.jpg';

import squat from '../utils/Images/squat.jpg';
import lunges from '../utils/Images/lunges.jpg';
import LegPress from '../utils/Images/LegPRESS.jpg';
import CalfRaise from '../utils/Images/CalfRaise.jpg';
import Deadlift from '../utils/Images/Deadlift.jpg';
import LegCurl from '../utils/Images/LegCurl.png';

import leg_extension from '../utils/Images/leg extension.jpg';
import lateral_raise from '../utils/Images/lateral_raise.jpg';
import ShoulderPress from '../utils/Images/Shoulder Press.jpg';
import rear_delt_fly from '../utils/Images/rear_delt_fly.jpg';
import FrontRaise from '../utils/Images/FrontRaise.jpg';
import upright_row from '../utils/Images/upright_row.png';
import ArnoldPress from '../utils/Images/ArnoldPress.png';
import Shrugs from '../utils/Images/Shrugs.jpg';

import BenchPress from '../utils/Images/BenchPress.png';
import push_up from '../utils/Images/PushUp.jpg';
import chest_fly from '../utils/Images/chest_fly.jpg';
import InclineBenchPres from '../utils/Images/InclineBenchPres.jpg';
import cable_crossover from '../utils/Images/cable_crossover.jpg';
import DumbbellPress from '../utils/Images/DumbbellPress.png';
import PecDeck from '../utils/Images/PecDeck.png';

import Crunch from '../utils/Images/Crunch.png';
import Plank from '../utils/Images/Plank.jpg';
import LegRaise from '../utils/Images/LegRaise.png';
import RussianTwist from '../utils/Images/RussianTwist.jpg';
import BicycleCrunch from '../utils/Images/BicycleCrunch.jpg';
import MountainClimbers from '../utils/Images/MountainClimbers.jpg';
import SitUp from '../utils/Images/SitUp.png';

import pull_up from '../utils/Images/pull_up.jpg';
import bent_over_row from '../utils/Images/bent_over_row.jpg';
import lat_pulldown from '../utils/Images/lat_pulldown.jpg';
import seated_row from '../utils/Images/seated_row.jpg';
import TBarRow from '../utils/Images/T-BarRow.jpg';
import face_pull from '../utils/Images/face_pull.jpg';
// Styled components for layout
const Title = styled(Typography)`
  color: ${lightTheme.primary};
  margin-bottom: 10px;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center; /* Yatayda ortalar */
  align-items: center; /* Dikeyde ortalar */
  margin-bottom: 20px; /* Alt boşluk */
`;
const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 40px;
`;



const SelectButton = styled(Button)`
  width: 45%;
  height: 120px;
  font-size: 1.4rem;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.4);

  &:first-child {
    background-image: url(${kaloriBg});
  }

  &:last-child {
    background-image: url(${exerciseBg});
  }

  &:hover {
    filter: brightness(1.1);
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
  }

  &:active {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
    transform: scale(0.98);
  }
`;


const ExerciseListContainer = styled(Box)`
  margin-top: 20px;
`;

const CalorieCalculatorContainer = styled(Box)`
  margin-bottom: 20px;
`;

const Text = styled.h2`
 font-family: 'Caveat', cursive;
 ;  font-weight: 700;
  color: ${({ theme }) => theme.text_primary}; /* Temadan birincil metin rengini alır */
  text-align: center;
  line-height: 1.4;
  margin-top: 60px;

  /* Responsive font boyutları */
  @media (max-width: 1200px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const ExerciseList = ({ selectedArea, onBack }) => {
  const exercises = {
    arm: [
      { name: 'Biceps Curl', image: biceps_curl },
      { name: 'Triceps Dip', image: triceps_dip},
      { name: 'Hammer Curl', image: hammer_curl },
      { name: 'Skull Crusher', image: skull_crusher },
      { name: 'Cable Curl', image: cable_curl},
      { name: 'Dumbbell Kickback', image: dumbbell_kickback},
      { name: 'Close Grip Bench Press', image: close_grip},
    ],
    leg: [
      { name: 'Squat', image: squat },
      { name: 'Lunges', image: lunges },
      { name: 'Leg Press', image: LegPress },
      { name: 'Calf Raise', image:CalfRaise },
      { name: 'Deadlift', image: Deadlift},
      { name: 'Leg Curl', image:LegCurl},
      { name: 'Leg Extension', image: leg_extension },
    ],
    shoulder: [
      { name: 'Shoulder Press', image:ShoulderPress },
      { name: 'Lateral Raise', image:lateral_raise},
      { name: 'Front Raise', image: FrontRaise },
      { name: 'Rear Delt Fly', image: rear_delt_fly},
      { name: 'Upright Row', image: upright_row},
      { name: 'Arnold Press', image: ArnoldPress },
      { name: 'Shrugs', image: Shrugs },
    ],
    chest: [ 
      { name: 'Bench Press', image: BenchPress},
      { name: 'Push Up', image: push_up },
      { name: 'Chest Fly', image: chest_fly},
      { name: 'Incline Bench Press', image: InclineBenchPres },
      { name: 'Cable Crossover', image: cable_crossover },
      { name: 'Dumbbell Press', image:DumbbellPress },
      { name: 'Pec Deck', image:PecDeck },
    ],
    abs: [
      { name: 'Crunch', image:Crunch},
      { name: 'Plank', image: Plank },
      { name: 'Leg Raise', image: LegRaise },
      { name: 'Russian Twist', image: RussianTwist },
      { name: 'Bicycle Crunch', image: BicycleCrunch},
      { name: 'Mountain Climbers', image: MountainClimbers },
      { name: 'Sit Up', image:SitUp },
    ],
    back: [
      { name: 'Pull Up', image: pull_up},
      { name: 'Bent Over Row', image: bent_over_row },
      { name: 'Lat Pulldown', image: lat_pulldown },
      { name: 'Deadlift', image: Deadlift },
      { name: 'Seated Row', image: seated_row },
      { name: 'T-Bar Row', image: TBarRow },
      { name: 'Face Pull', image: face_pull},
    ],
  };
  
  return (
    <ExerciseListContainer>
      <Typography variant="h6">Selected Muscle Group: {selectedArea}</Typography>
      <Grid container spacing={1}>
        {exercises[selectedArea]?.map((exercise, index) => (
          <Grid item xs={6} key={index}>
            <Box display="flex" alignItems="center" marginBottom={1}>
              <img src={exercise.image} alt={exercise.name} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
              <Typography>{exercise.name}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Button variant="outlined" onClick={onBack} style={{ marginTop: '10px' }}>
        Go Back ↩
      </Button>
    </ExerciseListContainer>
  );
};
const CalorieCalculator = ({ onBack }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [goalWeight, setGoalWeight] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('1.55');
  const [dailyCalories, setDailyCalories] = useState(null);

  const calculateCalories = () => {
    if (weight && height && age && goalWeight) {
      const BMR = gender === 'male'
        ? 100 + (10.7 * weight) + (7.9 * height) - (4.8 * age)
        : 700 + (9.6 * weight) + (4.8 * height) - (2.7 * age);

      const dailyCaloriesNeeded = BMR * activityLevel;
      const weightAdjustment = (goalWeight - weight) * 5700 / 40;
      const finalCalories = Math.round(dailyCaloriesNeeded + weightAdjustment);

      setDailyCalories(finalCalories);
    }
  };

  return (
    <CalorieCalculatorContainer>
      <Typography variant="h7">Calorie Calculation</Typography>
      <TextField label="Kilo (kg)" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} fullWidth margin="normal" />
      <TextField label="Boy (cm)" type="number" value={height} onChange={(e) => setHeight(e.target.value)} fullWidth margin="normal" />
      <TextField label="Yaş" type="number" value={age} onChange={(e) => setAge(e.target.value)} fullWidth margin="normal" />
      <TextField label="Hedef Kilo (kg)" type="number" value={goalWeight} onChange={(e) => setGoalWeight(e.target.value)} fullWidth margin="normal" />
      <TextField select label="Cinsiyet" value={gender} onChange={(e) => setGender(e.target.value)} fullWidth margin="normal" SelectProps={{ native: true }}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </TextField>
      <TextField select label="Aktivite Seviyesi" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} fullWidth margin="normal" SelectProps={{ native: true }}>
        <option value="1.2">Sedentary</option>
        <option value="1.375">Lightly Active</option>
        <option value="1.55">Moderately Active</option>
        <option value="1.725">Very Active</option>
        <option value="1.9">Extremely Active</option>
      </TextField>
      <Button variant="contained" color="primary" onClick={calculateCalories} style={{ marginTop: '10px' }}>
      Calculate 𓂃🖊
      </Button>
      <Button variant="outlined" onClick={onBack} style={{ marginTop: '10px' }}>
       Go Back ↩
      </Button>
      {dailyCalories !== null && (
        <Typography variant="h6" style={{ marginTop: '10px' }}>
          Your Daily Caloric Needs: {dailyCalories} kcal
        </Typography>
      )}
   
    </CalorieCalculatorContainer>
  );
};
const Tutorial = () => {
  const [showCalories, setShowCalories] = useState(false);
  const [showExercises, setShowExercises] = useState(false);
  const [selectedArea, setSelectedArea] = useState('');

  return (
    <Container maxWidth="sm">
      <TitleContainer>
        <Title variant="h6">Exercise and Calorie Calculation Guide</Title>
      </TitleContainer>
      {!showCalories && !showExercises ? (
        <>
          <ButtonContainer>
            <SelectButton variant="contained" onClick={() => setShowCalories(true)}>Calculate Calories</SelectButton>
            <SelectButton variant="contained" onClick={() => setShowExercises(true)}>Select Muscle Group</SelectButton>
          </ButtonContainer>
          {/* Resmi buraya ekleyin */}

          <Text>"Being fit is not a goal, it's a way of life. 🦍"</Text>
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <img 
              src={Karikatur} 
              alt="Karikatür" 
              style={{ maxWidth: '50%', height: 'auto'/*,  borderRadius: '100px'*/}} 
            />
          </div>
        </>
      ) : showCalories ? (
        <CalorieCalculator onBack={() => setShowCalories(false)} />
      ) : (
        showExercises && (
          <>
            {!selectedArea ? (
              <ButtonContainer>
                {['arm', 'leg', 'shoulder', 'chest', 'abs', 'back'].map((area) => (
                  <Button
                    key={area}
                    variant="contained"
                    onClick={() => setSelectedArea(area)}
                    style={{ width: '45%', margin: '5px 0' }}
                  >
                    {area.charAt(0).toUpperCase() + area.slice(1)}
                  </Button>
                ))}
                <Button
                  variant="outlined"
                  onClick={() => {
                    setShowExercises(false); // ShowExercises state'ini false yaparak geri döneriz
                    setSelectedArea(''); // Seçilen alanı sıfırlarız
                  }}
                  style={{ marginTop: '10px' }}
                >
                Go Back ↩
                </Button>
              </ButtonContainer>
            ) : (
              <ExerciseList selectedArea={selectedArea} onBack={() => setSelectedArea('')} />
            )}
          </>
        )
      )}
    </Container>
  );
};
  
  export default Tutorial;