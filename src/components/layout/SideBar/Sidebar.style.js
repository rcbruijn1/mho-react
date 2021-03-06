import { fade, makeStyles } from '@material-ui/core/styles';

export const useSideBarStyles = makeStyles(theme =>({
    drawer: {
        position: 'fixed',
        left: 0,
        height: 'calc(100% - 64px)',
        color: theme.palette.text.secondary,
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflowX: 'hidden',
        zIndex: theme.zIndex.drawer,
    },

    drawerOpen: {
      width: 250,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },

    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: 0,
    },

    listItem: {
      '&:hover': {
        backgroundColor: fade(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },

    listItemNested: {
      paddingLeft: theme.spacing(10),
      '&:hover': {
        backgroundColor: fade(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
}));