/* eslint-disable no-dupe-keys */
import { makeStyles } from '@material-ui/core/styles';

const useMainStyle = makeStyles(theme => ({
    mainWrapper: {
        position: 'relative',
        width: '100%',
        margin: 'auto',
        padding: theme.spacing(3),
        maxWidth: 1280,
        '&': theme.mixins.scrollbar,
    },
}));

export default useMainStyle;