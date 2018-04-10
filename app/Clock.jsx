import React from 'react';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import withStyles from 'material-ui/styles/withStyles';
import discordianDate from './ddate.js';
import moment from 'moment';

const styles = theme => ({
    primaryPaper: {
        backgroundColor : theme.palette.primary.main,
        padding: 10,
    },
    secondaryPaper: {
        backgroundColor : theme.palette.secondary.main,
        padding: 10,
    },
    primaryText: {
        color           : theme.palette.primary.contrastText,
    },
    secondaryText: {
        color           : theme.palette.secondary.contrastText,
    },
});

function beats(now) {
    var utcPlus1 = moment(now).utc().add(1, 'hour');
    var res = Math.floor(
        (utcPlus1.second() + (utcPlus1.minute() * 60) + (utcPlus1.hour() * 3600)) / 86.4);
    if (res === 1) {
        return "@ 1.beat";
    } else {
        return "@ " + res + ".beats";
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time : "",
            date : "",
        };  
    }

    getTime(cb) {
        moment.locale('de');
        var now = new Date();
        cb({
            time : moment(now).format('HH:mm'),
            date : moment(now).format('dddd, Do MMMM YYYY'),
        });
    }

    getDiscoBeatsTime(cb) {
        var now = new Date();
        cb({
            time : beats(now),
            date : discordianDate(now),
        });
    }

    componentDidMount() {
        if (this.props.discobeats) {
            var timeFun = this.getDiscoBeatsTime
        } else {
            var timeFun = this.getTime
        }
        const cb = (time) => this.setState(time);
        timeFun(cb);
        this.interval = setInterval(() => timeFun(cb), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        var textClass = this.props.color === "primary"
            ? this.props.classes.primaryText
            : this.props.classes.secondaryText;
        var paperClass = this.props.color === "primary"
            ? this.props.classes.primaryPaper
            : this.props.classes.secondaryPaper;
        return (
            <Paper className={paperClass}>
                <Typography
                    variant="display2" align="center"
                    className={textClass}
                >
                    {this.state.time}
                </Typography>
                <Typography
                    variant="subheading" align="center"
                    className={textClass}
                >
                    {this.state.date}
                </Typography>
            </Paper>
        );
    }
}

export default withStyles(styles)(Clock);
