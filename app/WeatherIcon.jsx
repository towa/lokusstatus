import React from 'react';
import WeatherCloudyIcon from 'mdi-react/WeatherCloudyIcon';
import WeatherRainyIcon from 'mdi-react/WeatherRainyIcon';
import WeatherLightningIcon from 'mdi-react/WeatherLightningIcon';
import WeatherPouringIcon from 'mdi-react/WeatherPouringIcon';
import WeatherSnowyRainyIcon from 'mdi-react/WeatherSnowyRainyIcon';
import WeatherSnowyIcon from 'mdi-react/WeatherSnowyIcon';
import WeatherFogIcon from 'mdi-react/WeatherFogIcon';
import WeatherSunnyIcon from 'mdi-react/WeatherSunnyIcon';
import WeatherPartlycloudyIcon from 'mdi-react/WeatherPartlycloudyIcon';
import WeatherHurricaneIcon from 'mdi-react/WeatherHurricaneIcon';

class WeatherIcon extends React.Component {
    render(){
        var cond = this.props.condition;
        if (cond < 300) {
            return(
                <WeatherLightningIcon
                    color={this.props.color}
                    size={this.props.size}
                />
            );
        } else if (cond < 400) {
            return(
                <WeatherPouringIcon
                    color={this.props.color}
                    size={this.props.size}
                />
            );
        } else if (cond <= 510) {
            return(
                <WeatherRainyIcon
                    color={this.props.color}
                    size={this.props.size}
                />
            );
        } else if (cond === 511) {
            return(
                <WeatherSnowyRainyIcon
                    color={this.props.color}
                    size={this.props.size}
                />
            );
        } else if (cond < 600) {
            return(
                <WeatherPouringIcon
                    color={this.props.color}
                    size={this.props.size}
                />
            );
        } else if (cond < 700) {
            return(
                <WeatherSnowyIcon
                    color={this.props.color}
                    size={this.props.size}
                />
            );
        } else if (cond < 800) {
            return(
                <WeatherFogIcon
                    color={this.props.color}
                    size={this.props.size}
                />
            );
        } else if (cond === 800) {
            return(
                <WeatherSunnyIcon
                    color={this.props.color}
                    size={this.props.size}
                />
            );
        } else if (cond < 900) {
            return(
                <WeatherPartlycloudyIcon
                    color={this.props.color}
                    size={this.props.size}
                />
            );
        } else {
            return(
                <WeatherHurricaneIcon
                    color={this.props.color}
                    size={this.props.size}
                />
            );
        }
    }
}

export default WeatherIcon;
