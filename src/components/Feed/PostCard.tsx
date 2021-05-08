import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Avatar, Divider } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  root: {
    maxWidth: 445,
  },
  media: {
    height: 350,
  },
});

export function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

        <CardMedia
          className={classes.media}
          image="https://i.imgur.com/4K5i7BT.jpeg"
          title="Contemplative Reptile"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
          >
            Lizards are a widespread group of squamate reptiles, with
            over 6,000 species, ranging across all continents except
            Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Chip label="Basic" />
        <Divider orientation="vertical" flexItem />
        awd
      </CardActions>
    </Card>
  );
}
