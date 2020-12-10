import { createStyles, makeStyles, Theme } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import ApiMarvelService from '../services/ApiMarvelService'
import CharasterDto from './Character'



const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}),
)

const MarvelComponent:  React.FC = () => {
    const classes = useStyles()

    const [Actor, setActors] = useState<CharasterDto[]>([])
    // const [Actor, setActors] = useState([[[]]])

    const getAllcharacters = () => {
            ApiMarvelService.getPersonageMarvel()
            .then(res => {
                setActors(res.data.data.results)
                console.log(Actor)
              })
    }

    useEffect(() => {
        getAllcharacters()
      })
    return(
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Nom : 
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Description : 
                  </Typography>
                  <Typography variant="body2" color="textSecondary">  
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
}

export default MarvelComponent