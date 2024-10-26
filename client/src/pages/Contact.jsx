import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Container, Button, TextField, Grid, CssBaseline } from '@mui/material';
import { lightTheme } from '../utils/Themes'; // Import theme
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X'; // MUI Close icon
import EmailIcon from '@mui/icons-material/Email'; // Email icon
import PhoneIcon from '@mui/icons-material/Phone'; // Phone icon
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import EditIcon from '@mui/icons-material/Edit'; // Pencil icon
import LocationOnIcon from '@mui/icons-material/LocationOn';

const SocialMedia = styled.div`
  margin: 10px 0;
  display: flex;
  gap: 15px;
  flex-wrap: wrap; /* For responsiveness */
`;

const IconWrapper = styled.a`
  color: ${({ theme }) => theme.black};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.primary}; /* Color change on hover */
  }
`;

const FeedbackForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px; /* Resize form */
  margin-bottom: 20px; /* Space between form and bottom of page */
`;

const MapContainer = styled.iframe`
  width: 100%;
  height: 400px;
  border: 0;
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch('https://your-api-endpoint.com/feedback', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Form submission success
      })
      .catch(error => {
        console.error('Error:', error);
        // Error handling
      });

    // Reset form
    e.target.reset();
  };

  return (
    <ThemeProvider theme={lightTheme}> {/* lightTheme used here */}
      <CssBaseline />
      <Container>
        <h1>Contact</h1>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <SocialMedia>
              <IconWrapper href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookIcon fontSize="large" />
              </IconWrapper>
              <IconWrapper href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <XIcon fontSize="large" /> {/* MUI Close icon */}
              </IconWrapper>
              <IconWrapper href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramIcon fontSize="large" />
              </IconWrapper>
              <IconWrapper href="mailto:your-email@example.com">
                <EmailIcon fontSize="large" />
              </IconWrapper>
              <IconWrapper href="tel:+123456789">
                <PhoneIcon fontSize="large" />
              </IconWrapper>
            </SocialMedia>

            <FeedbackForm onSubmit={handleSubmit}>
              <h2>Feedback</h2>
              <TextField
                label="Your Name (optional)"
                variant="outlined"
                margin="normal"
                fullWidth
                name="name"
                size="small" // Small size
              />
              <TextField
                label="Email (optional)"
                variant="outlined"
                margin="normal"
                fullWidth
                name="email"
                type="email"
                size="small" // Small size
                InputProps={{
                  startAdornment: (
                    <EmailIcon style={{ marginRight: 8 }} />
                  ),
                }}
              />
              <TextField
                label=" Phone Number (optional)"
                variant="outlined"
                margin="normal"
                fullWidth
                name="phone"
                type="tel"
                size="small" // Small size
                InputProps={{
                  startAdornment: (
                    <PhoneIcon style={{ marginRight: 8 }} />
                  ),
                }}
              />
                  <TextField
                select
                variant="outlined"
                margin="normal"
                fullWidth
                SelectProps={{
                  native: true,
                }}
                name="feedbackType"
                size="small" // Küçük boyut
                InputProps={{
                  startAdornment: (
                    <RadioButtonCheckedIcon style={{ marginRight: 8 }} />
                  ),
                }}
              >
                <option value="">Select Feedback Type</option>
                <option value="Suggestion">Suggestion</option>
                <option value="Complaint">Complaint</option>
                <option value="Other">Other</option>
              </TextField>
              <TextField
                label="Your feedback..."
                variant="outlined"
                margin="normal"
                fullWidth
                multiline
                rows={3} // Reduce row count
                name="message"
                size="small" // Small size
                InputProps={{
                  startAdornment: (
                    <EditIcon style={{ marginRight: 8 }} />
                  ),
                }}
              />
              <Button variant="contained" color="primary" type="submit" size="small"> {/* Small button size */}
                Submit
              </Button>
            </FeedbackForm>
          </Grid>
          <Grid item xs={12} md={6}>
          <h2><LocationOnIcon fontSize="inherit" style={{ marginRight: '8px' }} />  Location</h2>
            <MapContainer
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.717239941259!2d29.032019384815992!3d40.98767209749028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab870784d1389%3A0x2bf4921764859e70!2zw5xsa2VyIEZlbmVyYmFow6dlIMWew7xrcsO8IFNhcmFjb8SfbHUgU3RhZHl1bXU!5e0!3m2!1str!2str!4v1729869994464!5m2!1str!2str" 
              allowFullScreen=""
              loading="lazy"
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Contact;
