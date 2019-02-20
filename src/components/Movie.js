import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
    background: {
        marginTop: "60px",
        marginLeft: "10px",
        height: "700px",
        left: "50%",
        right: "50%",
        width: "1280px",
        backgroundRepeat: "no-repeat"

    },
    card: {
        maxWidth: "40%",
        height: "327px",
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        position: "absolute",
        left: "117px",
        top: "550px"

    },
    header: {
        fontWeight: 500,
        fontSize: 18
    },
    media: {
        height: 278,
        width: 185,
        minWidth: 200,
        marginLeft: "20px",
        marginTop: "25px",

    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    tabs: {
        background: '#fff',
    },
    slide: {
        padding: 15,
        minHeight: 100,
        backgroundColor: '#fff',
    },
    info: {
        marginLeft: 36,
        padding: 16
    },
});

class Movie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };
    }

    handleChange = (event, value) => {
        this.setState({
            index: value,
        });
    };

    handleChangeIndex = index => {
        this.setState({
            index,
        });
    };

    render() {
        const {classes, movie} = this.props;
        // const {index} = this.state;
        console.log(this.props);
        return (
            <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>>
                <Paper className={classes.background} zDepth={3}
                       style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}}/>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.media}
                        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                    <div  style={{display: "flex", flexDirection: "column"}}>
                        <CardHeader
                            title={movie.original_title}
                        />
                        <CardContent>
                            <Typography component="p">
                                {movie.overview}
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(Movie);

