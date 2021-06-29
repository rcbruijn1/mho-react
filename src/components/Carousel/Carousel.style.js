import { makeStyles } from '@material-ui/core/styles';
import bgMain from '../../assets/images/bg-main2.jpg';

export const useCarouselStyles = makeStyles(theme => ({

  carouselContainer: {
    zIndex: 3,
    display: 'flex',
    margin: 'auto',
    background: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    minHeight: '70%',
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius,
    backgroundImage: `url(${bgMain})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: theme.spacing(5),
  },

  carouselContent: {
    width: '50%',
    minHeight: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  slideActive: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    textAlign: 'center',
  },

  slideInActive: {
    display: 'none',
  },

  indicatorButton: {
    color: theme.palette.secondary.main,
    opacity: theme.palette.action.disabledOpacity,
    fontSize: 20,
  },

  indicatorButtonActive: {
    color: theme.palette.secondary.main,
    fontSize: 20,
  },
}));
