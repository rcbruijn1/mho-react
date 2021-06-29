import { makeStyles } from '@material-ui/core/styles';

export const useAppStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        overflowY: 'scroll',
    },

    scrollbar: theme.mixins.scrollbar,
}));