import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import WorkoutCard from "../components/cards/WorkoutCard"; // Egzersiz kartı bileşeni
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";
import { getWorkouts, deleteWorkout } from "../api"; // Egzersizleri API'den çeken ve silen fonksiyonlar
import { CircularProgress } from "@mui/material";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1600px;
  display: flex;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 0.2;
  height: fit-content;
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Right = styled.div`
  flex: 1;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const SecTitle = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

const Workouts = () => {
  const [todaysWorkouts, setTodaysWorkouts] = useState([]); // Bugünkü egzersizler
  const [loading, setLoading] = useState(false); // Yüklenme durumu
  const [date, setDate] = useState(""); // Tarih seçimi için state

  // Egzersizleri alma fonksiyonu
  const getTodaysWorkout = useCallback(async () => {
    setLoading(true); // Yüklenme durumu başlıyor
    const token = localStorage.getItem("fittrack-app-token"); // Token alınıyor
    try {
      const res = await getWorkouts(token, date ? `?date=${date}` : "");
      setTodaysWorkouts(res?.data?.todaysWorkouts || []); // Egzersizler state'e atanıyor
    } catch (error) {
      console.error("Error fetching workouts:", error);
    } finally {
      setLoading(false); // Yüklenme bitiyor
    }
  }, [date]); // Sadece date'e bağlı

  // Silme işlevi (WorkoutCard'dan gelen workoutName ile çağrılır)
  const handleDelete = async (workoutName) => {
    const token = localStorage.getItem("fittrack-app-token");
    try {
      await deleteWorkout(token, workoutName); // API'ye silme isteği gönder
      getTodaysWorkout(); // Egzersiz listesini yeniden al
    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  };

  // Tarih seçildiğinde egzersizleri güncelle
  useEffect(() => {
    getTodaysWorkout();
  }, [date, getTodaysWorkout]); // getTodaysWorkout'ı bağımlılıklar arasına ekleyin

  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>Select Date</Title>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              onChange={(e) => setDate(`${e.$M + 1}/${e.$D}/${e.$y}`)} // Tarih seçimi
            />
          </LocalizationProvider>
        </Left>
        <Right>
          <Section>
            <SecTitle>Todays Workout</SecTitle>
            {loading ? (
              <CircularProgress /> // Yükleniyorsa loading göster
            ) : (
              <CardWrapper>
                {todaysWorkouts.length > 0 ? (
                  todaysWorkouts.map((workout) => (
                    <WorkoutCard
                      key={workout.workoutName} // Her workout'a benzersiz key
                      workout={workout} // Workout verisi
                      onDelete={handleDelete} // Silme fonksiyonu prop olarak iletiliyor
                    />
                  ))
                ) : (
                  <p>No workouts for today</p> // Egzersiz yoksa mesaj
                )}
              </CardWrapper>
            )}
          </Section>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Workouts;
