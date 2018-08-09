import React from 'react';
import Timetable from './plugins/Bus';
import WeatherReport from './plugins/Weather';
import Putzplan from './plugins/Putzplan';
import Clock from './plugins/Clock';
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
      light: '#39796b',
      main: '#004d40',
      dark: '#00251a',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffb04c',
      main: '#f57f17',
      dark: '#bc5100',
      contrastText: '#000',
    },
  },
});


function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <div style={{margin : 8}}>
                <Grid container style={{flexGrow : 1}} spacing={8}>
                    <Grid item xs={12} lg={3}>
                        <Grid container  alignItem="stretch" spacing={8}>
                            <Grid item xs={12}>
                                <Clock discobeats color="primary"/>
                            </Grid>
                            <Grid item xs={12}>
                                <WeatherReport id="2821164"/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Grid container spacing={8}>
                            <Grid item xs={12}>
                                <Clock color="secondary"/>
                            </Grid>
                            <Grid item xs={12}>
                                <Putzplan/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Grid container alignItems="stretch" spacing={8}>
                            <Grid item xs={12}>
                                <Timetable stop="KTH" title="Kaiser*innenthermen"/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Grid container spacing={8}>
                            <Grid item xs={12}>
                                <Timetable stop="GIL" title="Gilbertstrasze"/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
