import { 
    withStyles,
    Avatar,
    Paper,
    Grid,
    Typography,
    IconButton
} from "@material-ui/core";
import UserIcon from "@material-ui/icons/SupervisedUserCircle";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import PropTypes from "prop-types";
import Link from "next/link"

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    avatar: {
        margin: 10,
        backgroundColor: "#ff5722"
    },
    card: {
        minWidth: 300,
        minHeight: 50,
        padding: 10,
    }
})

const MyCard = ({ classes, title, subtitle, avatar, id }) => (
    <div className={ classes.root } >
        <Paper className={classes.card}>
            <Grid container >
                <Grid item >
                    <Avatar className={classes.avatar} >
                        { avatar ? avatar : <UserIcon /> }
                    </Avatar>
                </Grid>
                <Grid item direction="column" container spacing={16} xs >
                    <Grid item >
                        <Typography color="primary" variant="title" component="title">
                            { title }
                        </Typography>
                        <Typography variant="subtitle1">
                            { subtitle } 
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Link prefetch href={`/proveedor?id=${id ? id : title}`} >
                        <IconButton color="secondary" aria-label="Go" >
                            <KeyboardArrowRight />
                        </IconButton>
                    </Link>
                </Grid>
            </Grid>
        </Paper>
    </div>
);

MyCard.propTypes = {
    classes: PropTypes.object,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    avatar: PropTypes.element,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const withStylesMyCard = withStyles(styles)(MyCard);
export default withStylesMyCard