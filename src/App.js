
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'



import Empty from './Empty'
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Second from './Second'
import ResponsiveAppBar from './ResponsiveAppBar';
import Third from './Third'
import Home from './Home'
import Four from './Four'

import Sponsors from './Sponsors'
import NextPage from './NextPage';
import  { useState, } from 'react';







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
    },
    five:{
      main:'rgba(16, 20, 25,0.5)'
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



function App() {
  

  const [showNextPage, setShowNextPage] = useState(false);
  
 
  const navigateToNextPage = () => {
    setShowNextPage(true);
  };


  const goBackToHomePage = () => {
    setShowNextPage(false);
  };


  return (
    <ThemeProvider theme={theme}>
      <div className="Keepco">
        <div className="Baza">
          <ResponsiveAppBar />
          {showNextPage ? (
            <NextPage goBackToHomePage={goBackToHomePage} />
          ) : (
            <>
              <div className="homi">
              <Empty />
              <Home />
              </div>
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
