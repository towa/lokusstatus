import React from 'react';
import axios from 'axios';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import WeatherRow from './WeatherRow.jsx';
import moment from 'moment';
import config from '../../config.js';


class WeatherReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            report : []
        };  
    }

    getReport(cityID) {
        axios.get('https://api.openweathermap.org/data/2.5/forecast',
            {
                params : {
                    id      : cityID,
                    units   : 'metric',
                    APPID   : config.weather.appid,
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    this.setState({
                        report  : response.data.list,
                        city    : response.data.city,
                    });
                }
            });
        
    }

    componentDidMount() {
        this.getReport(this.props.id);
        this.interval = setInterval(() => this.getReport(this.props.id), 300000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        return (
            <Paper>
                <Typography variant="display1" style={{ padding: 10 }} align="right">
                    {this.state.city ? this.state.city.name : "None"}
                </Typography>
                <WeatherForecast reports={this.state.report.slice(0,10)} />
            </Paper>
        );
    }
}

class WeatherForecast extends React.Component {
    render() {
        var today = moment().day();
        var days = this.props.reports
            .map((rep) => moment(rep.dt_txt).day() - today)
            .filter((value, index, self) => self.indexOf(value) === index)
            .map((day) => {
                return ({
                    day : moment().add(day, 'days').format('dddd'),
                    list : this.props.reports
                        .filter((rep) => (moment(rep.dt_txt).day() - today) === day),
                });
            });
        return(
            <div>
                {days.map( (day) => {
                    return (
                        <WeatherForecastDay
                            key={day.day}
                            reports={day.list}
                            day={day.day}
                        />
                    );
                })}
            </div>
        );
    }
}

class WeatherForecastDay extends React.Component {
    render() {
        return (
            <div>
                <Typography style={{ paddingLeft : 10 }} variant="headline">
                    {this.props.day}
                </Typography>
                <table style={{ width: '100%', padding : 10}}>
                <tbody>
                    {this.props.reports.map( (rep) => {
                        return (
                            <WeatherRow key={rep.dt_txt} report={rep}/>
                        );
                    })}
                </tbody>
                </table>
            </div>
        );
    }
}


export default WeatherReport;
