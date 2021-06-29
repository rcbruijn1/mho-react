import { makeStyles } from '@material-ui/core/styles';

export const useContentBlockStyles = makeStyles(theme => ({
    contentBlock: {
        backgroundColor: theme.palette.common.white,
        padding: theme.spacing(3),
        maxWidth: 1280,
        margin: 'auto',
        borderRadius: theme.shape.borderRadius,
        minHeight: 500, 
        display: 'flex', 
        alignItems: 'center',
        marginBottom: theme.spacing(3),
    },
}));