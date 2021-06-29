import { makeStyles } from '@material-ui/core/styles';

export const useSpeedDialStyle = makeStyles(theme => ({
    fabSpeedDial: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    actions: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        },
    },
}));