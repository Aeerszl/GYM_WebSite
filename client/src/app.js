import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { lightTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Tutorial from "./pages/Tutorial";
import Authentication from "./pages/Authentication";
import Footer from "./components/footer"; // Footer bileşenini import edin

// Tüm uygulamayı kapsayan dış kaplama
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Tüm ekran yüksekliği kadar olmasını sağlıyoruz */
`;

const Content = styled.div`
  flex: 1; /* İçerik kısmı esnek büyüklük alıyor */
`;

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {currentUser ? (
          <AppContainer>
            <Navbar currentUser={currentUser} />
            <Content>
              <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="/workouts" exact element={<Workouts />} />
                <Route path="/contact" exact element={<Contact />} />
                <Route path="/blogs" exact element={<Blogs />} />
                <Route path="/tutorial" element={<Tutorial />} />
              </Routes>
            </Content>
            <Footer />
          </AppContainer>
        ) : (
          <AppContainer>
            <Authentication />
          </AppContainer>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
