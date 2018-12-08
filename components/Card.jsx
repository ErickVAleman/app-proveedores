import { 
    withStyles,
    Avatar,
    Card,
    CardHeader,
    IconButton,
    CardActionArea
} from "@material-ui/core";
import UserIcon from "@material-ui/icons/SupervisedUserCircle";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import PropTypes from "prop-types";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    avatar: {
        margin: 10,
        backgroundColor: "#ff5722"
    },
    card: {
        minWidth: 300
    }
})

const MyCard = ({ children, classes, title, subtitle, key }) => (
    <div className={ classes.root } >
        <Card className={ classes.card } key={`Card-${key}`} >
            <CardHeader
                title={ title }
                subheader={ subtitle }
                action={
                    <IconButton>
                        <KeyboardArrowRight />
                    </IconButton>
                }
                avatar={
                    <Avatar className={ classes.avatar } >
                        <UserIcon />
                    </Avatar>
                } />
            {children}
        </Card>
    </div>
);

MyCard.propTypes = {
    children: PropTypes.element,
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    key: PropTypes.number
};

const withStylesMyCard = withStyles(styles)(MyCard);
export default withStylesMyCard