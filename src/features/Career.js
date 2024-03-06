import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';

const Career = () => {
    const[isClicked,setIsClicked]=useState(false)

    const showClick = async (contentId)=>{
    setIsClicked(contentId)
    }

    
      const opacity ={
        initial:{opacity:0},
        animate:{opacity:1,
        transition:{
            duration:1,type: "spring", stiffness: 100,
        }
        }
      }
      const top100Films = [
        { label: '18' },
        { label: '19' },
        { label: '20' },
        { label: '21' },
        { label: '22' },
        { label: "23"},
        { label: '24'},
        { label: '25', },
        { label: '26' },
        { label: '27' },
        {label: '28',},
        { label: '29', },
        { label: '30' },
        { label: '31' },
        {
          label: '32',
        },
        { label: "33", },
        { label: '34'},
        { label: '35',  },
        { label: '37', },
        {
          label: '38',
          year: 1977,
        },
        { label: '39', year: 2002 },
        { label: '40', year: 1995 },
        { label: '41', year: 1991 },
        { label: "42", year: 1946 },
        { label: '43', year: 1997 },
        { label: '44', year: 1995 },
        { label: '45', year: 1994 },
        { label: '46', year: 2001 },
        { label: '47', year: 1998 },
        { label: '48', year: 1968 },
        { label: '49', year: 1998 },
        { label: '50', year: 2014 },
      ];

      const countries = [
        { code: 'AD', label: 'Andorra', phone: '376' },
        {
          code: 'AE',
          label: 'United Arab Emirates',
          phone: '971',
        },
        { code: 'AF', label: 'Afghanistan', phone: '93' },
        {
          code: 'AG',
          label: 'Antigua and Barbuda',
          phone: '1-268',
        },
        { code: 'AI', label: 'Anguilla', phone: '1-264' },
        { code: 'AL', label: 'Albania', phone: '355' },
        { code: 'AM', label: 'Armenia', phone: '374' },
        { code: 'AO', label: 'Angola', phone: '244' },
        { code: 'AQ', label: 'Antarctica', phone: '672' },
        { code: 'AR', label: 'Argentina', phone: '54' },
        { code: 'AS', label: 'American Samoa', phone: '1-684' },
        { code: 'AT', label: 'Austria', phone: '43' },
        {
          code: 'AU',
          label: 'Australia',
          phone: '61',
          suggested: true,
        },
        { code: 'AW', label: 'Aruba', phone: '297' },
        { code: 'AX', label: 'Alland Islands', phone: '358' },
        { code: 'AZ', label: 'Azerbaijan', phone: '994' },
        {
          code: 'BA',
          label: 'Bosnia and Herzegovina',
          phone: '387',
        },
        { code: 'BB', label: 'Barbados', phone: '1-246' },
        { code: 'BD', label: 'Bangladesh', phone: '880' },
        { code: 'BE', label: 'Belgium', phone: '32' },
        { code: 'BF', label: 'Burkina Faso', phone: '226' },
        { code: 'BG', label: 'Bulgaria', phone: '359' },
        { code: 'BH', label: 'Bahrain', phone: '973' },
        { code: 'BI', label: 'Burundi', phone: '257' },
        { code: 'BJ', label: 'Benin', phone: '229' },
        { code: 'BL', label: 'Saint Barthelemy', phone: '590' },
        { code: 'BM', label: 'Bermuda', phone: '1-441' },
        { code: 'BN', label: 'Brunei Darussalam', phone: '673' },
        { code: 'BO', label: 'Bolivia', phone: '591' },
        { code: 'BR', label: 'Brazil', phone: '55' },
        { code: 'BS', label: 'Bahamas', phone: '1-242' },
        { code: 'BT', label: 'Bhutan', phone: '975' },
        { code: 'BV', label: 'Bouvet Island', phone: '47' },
        { code: 'BW', label: 'Botswana', phone: '267' },
        { code: 'BY', label: 'Belarus', phone: '375' },
        { code: 'BZ', label: 'Belize', phone: '501' },
        {
          code: 'CA',
          label: 'Canada',
          phone: '1',
          suggested: true,
        },]; 
  
    return ( 

    
        <div>
            <h1>Career</h1>
            <div style={{marginTop:50}} className="row">
                <div style={{width:'fit-content'}} className="d-flex flex-column col">
                    <h1>SKILLED AND <b className="bold">DEDICATED</b> EFFICIEND AND <b className="bold">FOCUSED</b></h1>
                </div>
                <div style={{fontSize:18}} className="col">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto doloribus accusamus sit nisi eius asperiores debitis et error autem facilis!
                    Architecto doloribus accusamus sit nisi eius asperiores debitis et error autem facilisus sit nisi eius asperiores debitis et error au
                    </p>
                </div>
            </div>
            <h1 style={{marginTop:100}} className="text-center">Available Positions</h1>
            <div style={{marginTop:50}} className="d-flex flex-column">
                <div style={{borderBottom:'1px solid #bbbbbb'}} className="positon1 d-flex justify-content-between">
                    <button id="position1" onClick={()=>showClick('position1')} style={{backgroundColor:'transparent',border:'none'}}>
                    <div className="d-flex flex-column">
                    <h2 style={{color:'#ffffff'}}>Marketing Expert</h2>
                    <p className="text-start" style={{color:'#bbbbbb',fontSize:14}}>
                        18/12/2023
                    </p>
                    </div>
                    </button>
                    <motion.div
                     initial={{opacity:0 }}
                     whileInView={{opacity:1}}
                     transition={{
                      duration:1,
                    }}
                    className={`showedposition1 ${isClicked === 'position1' ? 'showedposition1x' : ''} ${isClicked === 'removeposition1' ? 'showedposition1' : ''}`}>
                    <div style={{gap:20}}  className="d-flex">
                    <TextField   InputProps={{ style: { color: '#ffffff' } }} InputLabelProps={{ style: { color: '#ffffff' } }} id="standard-basic" label="First Name" variant="standard" />
                    <TextField    InputProps={{ style: { color: '#ffffff' } }} InputLabelProps={{ style: { color: '#ffffff' } }} id="standard-basic" label="Last Name" variant="standard" />
                    </div>  
                    <div style={{gap:20}} className="d-flex">
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={top100Films}
                      sx={{ width: 100 ,borderBottom:'2px solid #3399ff',borderLeft:'transparent',color:'#ffffff' ,marginTop:'15px' }}
                      renderInput={(params) => <TextField {...params}   color="forth"  InputLabelProps={{ style: { color: '#ffffff' } }}  label="Age" />}
                    />  
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 300,borderBottom:'2px solid #3399ff',borderLeft:'transparent',color:'#ffffff',marginTop:'15px' }}
                        options={countries}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        renderOption={(props, option) => (
                          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            <img
                              loading="lazy"
                              width="20"
                              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                              alt=""
                            />
                            {option.label} ({option.code}) +{option.phone}
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                          color="forth"
                          InputProps={{ style: { color: '#ffffff' } }}
                          InputLabelProps={{ style: { color: '#ffffff' } }}
                            {...params}
                            label="Choose a country"
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                          />
                        )}
                      />
                    </div>
                    <div style={{gap:20}}  className="d-flex">
                    <TextField style={{marginTop:15}}   InputProps={{ style: { color: '#ffffff' } }} InputLabelProps={{ style: { color: '#ffffff',marginLeft:10 } }} id="standard-basic" label="Phone" variant="standard" />
                    <TextField   style={{marginTop:15}}   InputProps={{ style: { color: '#ffffff' } }} InputLabelProps={{ style: { color: '#ffffff',marginLeft:10 } }} id="standard-basic" label="Email" variant="standard" />
                    </div>
                    <div className="upload-cs">
                      <h4>Upload CV</h4>
                    </div>
                    <div className="d-flex justify-content-evenly">
                    <Button style={{marginTop:20}} id="removepostion1" onClick={()=>showClick('removepositon1')} className="xcx" variant="outlined">Show Less</Button>
                    <Button style={{marginTop:20}} id="removepostion1" onClick={()=>showClick('removepositon1')} className="xcx" variant="outlined">Apply Now</Button>
                    </div>
                    </motion.div>
                </div>
                <div style={{borderBottom:'1px solid #bbbbbb',marginTop:20}} className="positon1 d-flex justify-content-between">
                    <button id="position2" onClick={()=>showClick('position2')} style={{backgroundColor:'transparent',border:'none'}}>
                    <div className="d-flex flex-column">
                    <h2 style={{color:'#ffffff'}}>Front-End Developer</h2>
                    <p className="text-start" style={{color:'#bbbbbb',fontSize:14}}>
                        23/11/2023
                    </p>
                    </div>
                    </button>
                    <motion.div
                     initial={{opacity:0 }}
                     whileInView={{opacity:1}}
                     transition={{
                      duration:1,
                    }}
                    className={`showedposition1 ${isClicked === 'position2' ? 'showedposition1x' : ''} ${isClicked === 'removeposition2' ? 'showedposition1' : ''}`}>
                     <div style={{gap:20}}  className="d-flex">
                    <TextField   InputProps={{ style: { color: '#ffffff' } }} InputLabelProps={{ style: { color: '#ffffff' } }} id="standard-basic" label="First Name" variant="standard" />
                    <TextField    InputProps={{ style: { color: '#ffffff' } }} InputLabelProps={{ style: { color: '#ffffff' } }} id="standard-basic" label="Last Name" variant="standard" />
                    </div>  
                    <div style={{gap:20}} className="d-flex">
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={top100Films}
                      sx={{ width: 100 ,borderBottom:'2px solid #3399ff',borderLeft:'transparent',color:'#ffffff' ,marginTop:'15px' }}
                      renderInput={(params) => <TextField {...params}   color="forth"  InputLabelProps={{ style: { color: '#ffffff' } }}  label="Age" />}
                    />  
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 300,borderBottom:'2px solid #3399ff',borderLeft:'transparent',color:'#ffffff',marginTop:'15px' }}
                        options={countries}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        renderOption={(props, option) => (
                          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            <img
                              loading="lazy"
                              width="20"
                              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                              alt=""
                            />
                            {option.label} ({option.code}) +{option.phone}
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                          color="forth"
                          InputProps={{ style: { color: '#ffffff' } }}
                          InputLabelProps={{ style: { color: '#ffffff' } }}
                            {...params}
                            label="Choose a country"
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                          />
                        )}
                      />
                    </div>
                    <div style={{gap:20}}  className="d-flex">
                    <TextField style={{marginTop:15}}   InputProps={{ style: { color: '#ffffff' } }} InputLabelProps={{ style: { color: '#ffffff',marginLeft:10 } }} id="standard-basic" label="Phone" variant="standard" />
                    <TextField   style={{marginTop:15}}   InputProps={{ style: { color: '#ffffff' } }} InputLabelProps={{ style: { color: '#ffffff',marginLeft:10 } }} id="standard-basic" label="Email" variant="standard" />
                    </div>
                    <div className="upload-cs">
                      <h4>Upload CV</h4>
                    </div> 
                    <div className="d-flex justify-content-evenly">
                    <Button style={{marginTop:20}} id="removepostion2" onClick={()=>showClick('removepositon2')} className="xcx" variant="outlined">Show Less</Button>
                    <Button style={{marginTop:20}} id="removepostion2" onClick={()=>showClick('removepositon2')} className="xcx" variant="outlined">Apply Now</Button>
                    </div>
                    </motion.div>
                </div>
                <div style={{borderBottom:'1px solid #bbbbbb',marginTop:20}} className="positon1 d-flex justify-content-between">
                    <button id="position3" onClick={()=>showClick('position3')} style={{backgroundColor:'transparent',border:'none'}}>
                    <div className="d-flex flex-column">
                    <h2 style={{color:'#ffffff'}}>Service Contact (2x)</h2>
                    <p className="text-start" style={{color:'#bbbbbb',fontSize:14}}>
                        27/11/2023
                    </p>
                    </div>
                    </button>
                    <motion.div
                     initial={{opacity:0 }}
                     whileInView={{opacity:1}}
                     transition={{
                      duration:1,
                    }}
                    className={`showedposition1 ${isClicked === 'position3' ? 'showedposition1x' : ''} ${isClicked === 'removeposition3' ? 'showedposition1' : ''}`}>
                    <div style={{gap:20}}  className="d-flex">
                    <TextField   InputProps={{ style: { color: '#ffffff' } }} InputLabelProps={{ style: { color: '#ffffff' } }} id="standard-basic" label="First Name" variant="standard" />
                    <TextField    InputProps={{ style: { color: '#ffffff' } }} InputLabelProps={{ style: { color: '#ffffff' } }} id="standard-basic" label="Last Name" variant="standard" />
                    </div>  
                    <div style={{gap:20}} className="d-flex">
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={top100Films}
                      sx={{ width: 100 ,borderBottom:'2px solid #3399ff',borderLeft:'transparent',color:'#ffffff' ,marginTop:'15px' }}
                      renderInput={(params) => <TextField {...params}   color="forth"  InputLabelProps={{ style: { color: '#ffffff' } }}  label="Age" />}
                    />  
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 300,borderBottom:'2px solid #3399ff',borderLeft:'transparent',color:'#ffffff',marginTop:'15px' }}
                        options={countries}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        renderOption={(props, option) => (
                          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            <img
                              loading="lazy"
                              width="20"
                              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                              alt=""
                            />
                            {option.label} ({option.code}) +{option.phone}
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                          color="forth"
                          InputProps={{ style: { color: '#ffffff' } }}
                          InputLabelProps={{ style: { color: '#ffffff' } }}
                            {...params}
                            label="Choose a country"
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                          />
                        )}
                      />
                    </div>
                    <div style={{gap:20}}  className="d-flex">
                    <TextField style={{marginTop:15}}   InputProps={{ style: { color: '#ffffff' } }} InputLabelProps={{ style: { color: '#ffffff',marginLeft:10 } }} id="standard-basic" label="Phone" variant="standard" />
                    <TextField   style={{marginTop:15}}   InputProps={{ style: { color: '#ffffff' } }} InputLabelProps={{ style: { color: '#ffffff',marginLeft:10 } }} id="standard-basic" label="Email" variant="standard" />
                    </div>
                    <div className="upload-cs">
                      <h4>Upload CV</h4>
                    </div> 
                    <div className="d-flex justify-content-evenly">
                    <Button style={{marginTop:20}} id="removepostion3" onClick={()=>showClick('removepositon3')} className="xcx" variant="outlined">Show Less</Button>
                    <Button style={{marginTop:20}} id="removepostion3" onClick={()=>showClick('removepositon3')} className="xcx" variant="outlined">Apply Now</Button>
                    </div>
                    </motion.div>
                </div>
            </div>
            <div className="empty4"></div>
        </div>
     );
}
 
export default Career;