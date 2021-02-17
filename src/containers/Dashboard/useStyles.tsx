import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 64
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  sidebar: {
    height: '100vh',
    background: '#3B79F2'
  },
  content: {
    padding: 30
  }
}));

export default useStyles;