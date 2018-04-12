import React from 'react';
import BusIcon from 'mdi-react/BusIcon';
import { withTheme } from 'material-ui/styles'


const styles = theme => ({
    primary: {
        color : theme.palette.primary.main,
    },
    secondary: {
        color : theme.palette.secondary.main,
    },
    root: {
        color : theme.palette.text.primary,
    },
});

class MyBusIcon extends React.Component {
    render() {
        return(
            <BusIcon
                style={{ paddingRight: 10 }}
                color={this.props.theme.palette.secondary.main}
            />
        );
    }
}
    

export default withTheme()(MyBusIcon);
