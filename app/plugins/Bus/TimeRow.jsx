import React from 'react';
import { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import withStyles from 'material-ui/styles/withStyles';

const styles = theme => ({
    primary: {
        backgroundColor : theme.palette.primary.main,
        color           : theme.palette.primary.contrastText,
    },
    secondary: {
        backgroundColor : theme.palette.secondary.main,
        color           : theme.palette.secondary.contrastText,
    },
    disabled: {
        background  : 'transparent',
        color       : theme.palette.text.primary,
    },
});

class MyAvatar extends React.Component {
    render() {
        return (
            <Avatar className={this.props.classes[this.props.color]}>
                {this.props.children}
            </Avatar>
        );
    }
    
}

const StyledAvatar = withStyles(styles, { name: 'MyAvatar' })(MyAvatar);

class TimeRow extends React.Component {
    render() {
        return (
            <ListItem>
                <StyledAvatar
                    color='primary'
                >
                    {this.props.row.route}
                </StyledAvatar>
                <ListItemText>
                    <Typography noWrap>{this.props.row.destination}</Typography>
                </ListItemText>
                <StyledAvatar
                    color={this.props.row.live_mins > 3 ? 'disabled' : 'secondary'}
                >
                    {this.props.row.live_mins.toString()}
                </StyledAvatar>
            </ListItem>
        );
    }
}


export default TimeRow;
