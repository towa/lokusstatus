import React from 'react';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import moment from 'moment';
import WeatherIcon from './WeatherIcon.jsx'


class WeatherRow extends React.Component {
    render(){
        var date = moment(this.props.report.dt_txt).format('HH:mm');
        var temp = Math.floor(this.props.report.main.temp) + '°C';
        var prec = this.props.report.rain && this.props.report.rain['3h']
             ? this.props.report.rain['3h'] : 0;
        var rain = (Math.round(prec * 100) / 100) + ' mm';
        var cond = this.props.report.weather[0].id
        return(
            <tr style={{ padding : 10}}>
                <td>
                    <Typography style={{ fontSize : 18 }}>
                        {date}
                    </Typography>
                </td>
                <td style={{ textAlign : 'right' }}>
                    <Typography style={{ fontSize : 18 }}>
                        {rain} 
                    </Typography>
                </td>
                <td style={{ textAlign : 'right' }}>
                    <Typography style={{ fontSize : 18 }}>
                        {temp}
                    </Typography>
                </td>
                <td style={{ textAlign : 'right' }}>
                    <WeatherIcon color="white" condition={cond} size={32}/>
                </td>
            </tr>
        );
    }
}

export default WeatherRow;
