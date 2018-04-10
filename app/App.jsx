import React from 'react';
import Timetable from './Timetable.jsx';
import WeatherReport from './WeatherReport.jsx';
import Putzplan from './Putzplan.jsx';
import Clock from './Clock.jsx';
import Grid from 'material-ui/Grid';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const routes = [
    {   path : '/',
        exact : true,
        main : () => <Timetable stop="KTH"/>,
        title : () => <StopButton label="Kaiserthermen"/>,
    },
      
];

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#bc477b',
      main: '#880e4f',
      dark: '#560027',
      contrastText: '#fff',
    },
    secondary: {
      light: '#88ffff',
      main: '#4dd0e1',
      dark: '#009faf',
      contrastText: '#000',
    },
  },
});


function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <div style={{margin : 8}}>
                <Grid container alignItems="stretch" spacing={8}>
                    <Grid item xs={12} sm={3}>
                        <Grid container alignItems="stretch" spacing={8}>
                            <Grid item xs={12}>
                                <Timetable stop="KTH" title="Kaiser*innenthermen"/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Grid container spacing={8}>
                            <Grid item xs={12}>
                                <Timetable stop="GIL" title="Gilbertstrasze"/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Grid container spacing={8}>
                            <Grid item xs={12}>
                                <Clock discobeats color="primary"/>
                            </Grid>
                            <Grid item xs={12}>
                                <WeatherReport id="2821164"/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Grid container spacing={8}>
                            <Grid item xs={12}>
                                <Clock color="secondary"/>
                            </Grid>
                            <Grid item xs={12}>
                                <Putzplan/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
