import React from 'react';
import axios from 'axios';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import TimeRow from './TimeRow.jsx';
import MyBusIcon from './MyBusIcon.jsx';
import Toolbar from 'material-ui/Toolbar';


class Timetable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timetable : []
        };  
    }

    getTimetable(stop) {
        axios.get('https://fsi.hochschule-trier.de/apis/bus/',
            {
                params : {
                    stop : stop,
                },
            })
            .then((response) => {
                var d = new Date();
                var t = d.getTime();
                if (response.status === 200) {
                    response.data.map((timerow,index) => {
                        timerow.id = index;
                        timerow.live_mins = Math.round((timerow.live - (t / 1000)) / 60);
                        timerow.delay_mins = Math.round((timerow.live - timerow.arrival) / 60);
                    });
                    this.setState({timetable : response.data});
                }
            });
        
    }

    componentDidMount() {
        this.getTimetable(this.props.stop);
        this.interval = setInterval(() => this.getTimetable(this.props.stop), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        return (
            <Paper style={{ paddingTop: 10, paddingBottom: 10 }}>
                <Toolbar>
                    <MyBusIcon color="primary" />
                    <Typography variant="title">
                        {this.props.title}
                    </Typography>
                </Toolbar>
                <List>
                    {this.state.timetable
                        .filter((row) => row.route != 0)
                        .slice(0,9)
                        .map((row) => {
                            return (
                            <TimeRow
                                key={row.id}
                                row={row}
                            />
                            );
                        })}
                </List>
            </Paper>
        );
    }
}


export default Timetable;
