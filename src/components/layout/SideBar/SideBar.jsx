import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Icons
import EventIcon from '@material-ui/icons/Event';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';
import PhoneIcon from '@material-ui/icons/Phone';

// Core
import { 
    Collapse,
    Drawer, 
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText, 
} from '@material-ui/core';

// Style
import { useSideBarStyles } from './Sidebar.style';
import { ExpandLess, ExpandMore, InfoOutlined } from '@material-ui/icons';

const SideBar = ({ open }) => {
    const classes = useSideBarStyles();
    const [collapse, setCollapse] = useState(false);

    return (
        <Drawer
            anchor="left" 
            open={open} 
            variant="permanent"
            className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
            })}
            classes={{
            paper: clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            }),
            }}
        >
            <List>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon>
                        <EventIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ noWrap: true, color: 'primary' }} primary="Afspraak maken" />
                </ListItem>

                <ListItem button className={classes.listItem} onClick={() => setCollapse(!collapse)}>
                    <ListItemIcon>
                        <InfoOutlined color="primary" />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ noWrap: true, color: 'primary' }} primary="Informatie" />
                    {collapse ? <ExpandLess color="primary" /> : <ExpandMore color="primary"/>}
                </ListItem>
                <Collapse in={collapse} timeout="auto" unmountOnExit>
                    <List>
                        <ListItem button className={classes.listItemNested}>
                            <ListItemText primaryTypographyProps={{ variant: 'body2', noWrap: true, color: 'primary' }} primary="Wat wij doen" />
                        </ListItem>
                        <ListItem button className={classes.listItemNested}>
                            <ListItemText primaryTypographyProps={{ variant: 'body2', noWrap: true, color: 'primary' }} primary="Klachten" />
                        </ListItem>
                        <ListItem button className={classes.listItemNested}>
                            <ListItemText primaryTypographyProps={{ variant: 'body2', noWrap: true, color: 'primary' }} primary="De Monhygieniste" />
                        </ListItem>
                        <ListItem button className={classes.listItemNested}>
                            <ListItemText primaryTypographyProps={{ variant: 'body2', noWrap: true, color: 'primary' }} primary="Tarieven" />
                        </ListItem>
                    </List>
                </Collapse>

                <ListItem button className={classes.listItem}>
                    <ListItemIcon><PeopleIcon color="primary" /></ListItemIcon>
                    <ListItemText primaryTypographyProps={{ noWrap: true, color: 'primary' }} primary="Over ons" />
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon>
                        <LocationOnIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ noWrap: true, color: 'primary' }} primary="Locaties" />
                </ListItem>
                <ListItem button className={classes.listItem}>
                    <ListItemIcon>
                        <PhoneIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ noWrap: true, color: 'primary' }} primary="Contact" />
                </ListItem>
            </List>
        </Drawer>
    );
};

SideBar.propTypes = {
    open: PropTypes.bool.isRequired,
};

export default SideBar;