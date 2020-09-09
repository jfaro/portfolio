import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components'

const DrawerToggle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <DrawerToggle>
            <Button
                onClick={toggleDrawer('top', true)}
                startIcon={<MenuIcon />}>
                Menu
            </Button>

            <Drawer anchor={'top'} open={state['top']} onClose={toggleDrawer('top', false)}>
                <ListItem button key="Home">
                    {/* <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon> */}
                    <ListItemText>
                        Mail
                    </ListItemText>
                </ListItem>
            </Drawer>

        </DrawerToggle >
    );
}