import React from 'react';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import moment from 'moment';
import config from './config.js';

const flatMates = config.putzplan.flatmates;

class Putzplan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            putzplan : {
                bathroom        : 'Eike',
                kitchen         : 'Eike',
                livingroom      : 'Eike',
            },
        };  
    }
    getPutzplan(cb) {
        var weeks = moment().diff(moment('2018-01-01'),'weeks');
        cb({
            putzplan : {
                bathroom        : flatMates[(weeks + 1) % 5],
                kitchen         : flatMates[(weeks + 2) % 5],
                livingroom      : flatMates[(weeks + 3) % 5],
                free            : flatMates[(weeks + 4) % 5]
                + ' & ' + flatMates[(weeks + 5) % 5],
            },
        });
        
    }
    componentDidMount() {
        const cb = (putzplan) => {
            this.setState(putzplan);
        };
        this.getPutzplan(cb);
        this.interval = setInterval(() => this.getPutzplan(cb), 60000);
    }
    render() {
        return (
            <Paper style={{ padding : 10}}>
                <Typography variant="title">
                    Badezimmer:
                </Typography>
                <Typography variant="display1">
                    {this.state.putzplan.bathroom}
                </Typography>
                <Typography variant="title">
                    Küche:
                </Typography>
                <Typography variant="display1">
                    {this.state.putzplan.kitchen}
                </Typography>
                <Typography variant="title">
                    Wohnzimmer & Flur:
                </Typography>
                <Typography variant="display1">
                    {this.state.putzplan.livingroom}
                </Typography>
                <Typography variant="title">
                    Frei :
                </Typography>
                <Typography variant="display1">
                    {this.state.putzplan.free}
                </Typography>
            </Paper>
        );
    }
}

export default Putzplan;
