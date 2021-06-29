import React, { useState } from 'react';

// Icons
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import MapIcon from '@material-ui/icons/Map';

// Core
import { SpeedDial as MuiSpeedDial, SpeedDialAction } from '@material-ui/lab';

// Style
import { useSpeedDialStyle } from './Speeddial.style';
import { Typography } from '@material-ui/core';

const SpeedDial = ({ ...rest }) => {
    const classes = useSpeedDialStyle();
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const actions = [
        { 
          icon: <PhoneIcon />, 
          name: 'Bellen' 
        },
        { 
          icon: <MailIcon />, 
          name: 'Mailen' 
        },
        { 
          icon: <MapIcon />, 
          name: 'Locatie' 
        },
      ];

    return (
    <MuiSpeedDial
        {...rest}
        ariaLabel="SpeedDial example"
        icon={<PhoneIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        classes={{ fab: classes.fabSpeedDial }}
        FabProps={{
          size: 'small',
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            classes={{ 
                fab: classes.actions,
            }}
            key={action.name}
            icon={action.icon}
            tooltipTitle={<Typography variant="body2">{action.name}</Typography>}
            tooltipPlacement="top"
            onClick={handleClose}
          />
        ))}
      </MuiSpeedDial>
    );
};

export default SpeedDial;