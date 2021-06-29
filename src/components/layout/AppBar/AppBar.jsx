import React, { useState } from 'react';

//Icons
import EventIcon from '@material-ui/icons/Event';
import PhoneIcon from '@material-ui/icons/Phone';
import MenuIcon from '@material-ui/icons/Menu';

// Core
import { 
  AppBar as MuiAppBar, 
  Box, 
  Hidden, 
  IconButton, 
  Toolbar, 
  Typography, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  TextField, 
} from '@material-ui/core';
import { Button } from '../../../components';


const AppBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MuiAppBar color='transparent'>
        <Toolbar component={Box} display="flex" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <IconButton color="secondary">
                <MenuIcon />
            </IconButton>
            <Box ml={3}>
                <Typography variant="h6">
                    Mondhygiënisten Oosterhout
                </Typography>
            </Box>
          </Box>
          <Hidden smDown>
            <Box>
              <Button
                gutters
                variant="text"
                color="white"
                iconProps={{
                    start: true,
                    icon: <EventIcon fontSize="small" />,
                }}
                label="Afspraak maken"
              />
              <Button
                onClick={() => setOpen(true)}
                gutters
                variant="text"
                color="white"
                iconProps={{
                    start: true,
                    icon: <PhoneIcon fontSize="small" />,
                }}
                label="Contact"
              />
            </Box>
          </Hidden>
        </Toolbar>
      </MuiAppBar>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle disableTypography>
          <Typography variant="h6">
              Afspraak maken
          </Typography>
        </DialogTitle>
        <DialogContent>
          <form>
            <Box display="flex" flexDirection="column">
              <Box mb={2} width="100%">
                  <TextField color="primary" id="outlined-basic" label="Naam" variant="outlined" />
              </Box>
              <Box mb={2} width="100%">
                  <TextField id="outlined-basic" label="Adres" variant="outlined" />
              </Box>
              <Box mb={2} width="100%">
                  <TextField id="outlined-basic" label="Telefoonnummer" variant="outlined" />
              </Box>
              <TextField id="outlined-basic" label="E-mailadres" variant="outlined" />
            </Box>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpen(false)}
            gutters
            variant="outlined"
            color="primary"
            label="Annuleer"
          />
          <Button
            gutters
            color="primary"
            label="Bevestig"
            disabled
          />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AppBar;