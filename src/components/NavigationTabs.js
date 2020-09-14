import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withRouter, Link } from 'react-router-dom'

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#635ee7',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
        textDecoration: 'none',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,

        fontFamily: [].join(','),
        '&:hover': {
            color: '#40a9ff',
            textDecoration: 'none',
            opacity: 1,
        },
        '&$selected': {
            color: '#1890ff',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#40a9ff',
        },
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

function NavigationTabs(props) {

    return (
        <StyledTabs
            value={props.location.pathname}
            indicatorColor="primary"
            centered>
            <StyledTab
                label="Home"
                value="/"
                component={Link}
                to='/' />

            <div className="h-pad" />

            <StyledTab
                label="Web Design"
                value="/web-development"
                component={Link}
                to='/web-development' />

            <div className="h-pad" />

            <StyledTab
                label="Drawing"
                value="/drawing"
                component={Link}
                to='/drawing' />
        </StyledTabs>
    );
}

export default withRouter(NavigationTabs)