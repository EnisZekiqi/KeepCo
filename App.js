
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'


import Navbar from './Navbar';
import Empty from './Empty'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Second from './Second'
import { blue } from '@mui/material/colors';
import ResponsiveAppBar from './ResponsiveAppBar';
import Third from './Third'
import Home from './Home'
import Four from './Four'
import Second2 from './Second2';
import Sponsors from './Sponsors'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NextPage from './NextPage';
import  { useState } from 'react';






const theme = createTheme({
  palette: {
    primary:{
      main:'#3399ff'
    },
    secondary:{
      main:'#bbbbbb'
    },
    third:{
      main:'#101418'
    },
    forth:{
      main:'#ffffff'
    }
  },
    typography: {
      fontFamily: [
        'Belanosima'
      ]
    },
    components: {
    Box: {
        variants: [
          {
            props: { variant: 'label' },
            style: {
              textTransform: 'none',
              border: `2px solid #3399ff`,
            },
          },
        ],
      },
    },
  
})

const color = blue[100];


function App() {
  

  const [showNextPage, setShowNextPage] = useState(false);

  const navigateToNextPage = () => {
    setShowNextPage(true);
  };

  const goBackToHomePage = () => {
    setShowNextPage(false);
  };

  const title = 'Welcome to Zeka'

  return (
    <ThemeProvider theme={theme}>
      <div className="Keepco">
        <div className="Baza">
          <ResponsiveAppBar />
          <Empty />
          {showNextPage ? (
            <NextPage goBackToHomePage={goBackToHomePage} />
          ) : (
            <>
              <Home />
              <Second navigateToNextPage={navigateToNextPage} />
              <div className="ndamas">
                <Third />
                <Sponsors />
                <Four />
              </div>
            </>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
