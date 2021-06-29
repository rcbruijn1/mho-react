import { fade, makeStyles } from '@material-ui/core';

export const useButtonStyles = makeStyles(theme => {
  const getColor = () => ({ color }) => {
    if (color === 'white') return theme.palette.common.white;
    return theme.palette[color].main;
  };

  return ({
    root: {
      padding: theme.spacing(0.75, 1.5),
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[1],
      color: theme.palette.common.white,
      backgroundColor: getColor(),
      '&.Mui-disabled': {
          opacity: theme.palette.action.disabledOpacity,
      },
    },

    text: {
      padding: theme.spacing(0.75, 1.5),
      borderRadius: theme.shape.borderRadius,
      background: 'transparent',
      '&:hover': {
        backgroundColor: fade(theme.palette.grey[50], 0.2),
      }
    },

    outlined: {
      padding: theme.spacing(0.75, 1.5),
      borderRadius: theme.shape.borderRadius,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: getColor(),
      color: getColor(),
    },

    withGutters: {
      margin: theme.spacing(1),
    },

    buttonIconStart: {
      marginRight: theme.spacing(1),
    },

    buttonIconEnd: {
      marginRight: theme.spacing(1),
    },
  });
});
