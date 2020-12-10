import { AppBar, 
    createStyles, 
    IconButton, 
    makeStyles, 
    Theme, 
    Toolbar, 
    Typography } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme: Theme  ) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(2),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);


const Header:  React.FC = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" color="inherit">
            Personnage Marvel 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header