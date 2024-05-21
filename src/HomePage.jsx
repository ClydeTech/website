import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Grid, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SecurityIcon from '@mui/icons-material/Security';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BugReportIcon from '@mui/icons-material/BugReport';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
//import heroImage from './hero-image.jpg'; // Make sure to add a relevant image in your project

const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b',
    },
    secondary: {
      main: '#c51162',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    h2: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
  },
});

class HomePage extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="logo">
              <SecurityIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Clyde Technology
            </Typography>
            <Button color="inherit" startIcon={<HomeIcon />}>Home</Button>
            <Button color="inherit" startIcon={<SecurityIcon />}>Services</Button>
            <Button color="inherit" startIcon={<ContactMailIcon />}>Contact</Button>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            //backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '60vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            px: 2,
          }}
        >
          <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', p: 4, borderRadius: 2 }}>
            <Typography variant="h2" gutterBottom>
              Welcome to Clyde Technology
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Your trusted partner in cybersecurity solutions
            </Typography>
            <Button variant="contained" color="secondary" size="large">
              Contact Us for a Free Consultation
            </Button>
          </Box>
        </Box>
        <Container>
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" gutterBottom align="center">
              Our Services
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                  <AssessmentIcon fontSize="large" color="primary" />
                  <Typography variant="h6" gutterBottom>
                    Threat Assessment
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Comprehensive evaluations to identify vulnerabilities and potential threats to your network.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                  <BugReportIcon fontSize="large" color="primary" />
                  <Typography variant="h6" gutterBottom>
                    Incident Response
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Swift and effective response strategies to mitigate and manage security breaches.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                  <VerifiedUserIcon fontSize="large" color="primary" />
                  <Typography variant="h6" gutterBottom>
                    Security Consulting
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Expert advice on best practices, compliance, and advanced security measures to protect your business.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" gutterBottom align="center">
              Why Choose Us
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph align="center">
              Our team of cybersecurity experts is dedicated to providing top-notch solutions tailored to your business needs. We pride ourselves on our:
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={4}>
                <Typography variant="body1" color="text.secondary" paragraph align="center">
                  <strong>Experience:</strong> With over 20 years in the cybersecurity industry, we have the expertise to protect your assets.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="body1" color="text.secondary" paragraph align="center">
                  <strong>Customer Service:</strong> We prioritize building strong relationships with our clients, offering personalized support and guidance.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="body1" color="text.secondary" paragraph align="center">
                  <strong>Innovation:</strong> We stay ahead of the curve by adopting the latest technologies and best practices in cybersecurity.
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button variant="contained" color="secondary" size="large">
                Contact Us for a Free Consultation
              </Button>
            </Box>
          </Box>
        </Container>
        <Box sx={{ py: 3, bgcolor: 'primary.main', color: 'white', mt: 6 }}>
          <Container maxWidth="sm">
            <Typography variant="body1" align="center">
              © 2024 Clyde Technology | Privacy Policy | Terms of Service
            </Typography>
          </Container>
        </Box>
      </ThemeProvider>
    );
  }
}

export default HomePage;
