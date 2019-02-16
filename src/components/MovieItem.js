import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {NavLink} from 'react-router-dom'

const styles = {
    card: {
        maxWidth: 400,
        margin: 10,

    },
    media: {
        height: 277,
    },
    description: {
        height: "207px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: "88%",
        textAlign: "justify"
    }
};

const MovieItem = (props) => {
    const {classes, movie} = props;
    return <Card className={classes.card}>

        <CardActionArea className={classes.body}>
            <CardMedia
                className={classes.media}
                image={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                title="Contemplative Reptile"
            />

            <CardContent className={classes.description}>
                <Typography gutterBottom variant="h5" component="h2">
                    {movie.title}
                </Typography>
                <Typography component="p">
                    {movie.overview}
                </Typography>
            </CardContent>


            <Divider variant="fullWidth"/>
            <CardActions>
                <NavLink to={`/movies/${movie.id}`} style={{textDecoration: 'none'}}>
                    <Button size="small" color="primary">
                        More Info
                    </Button>
                </NavLink>
            </CardActions>

        </CardActionArea>
    </Card>
};

export default withStyles(styles)(MovieItem);