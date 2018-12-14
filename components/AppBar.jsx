import { AppBar, Toolbar, Typography, IconButton, withStyles } from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import PropTypes, { shape } from "prop-types";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    AppBar: {
        backgroundColor: "#ff5722",
    }
});

const MyAppBar = ({ children, title, classes }) => (
    <div className={classes.root} >
        <AppBar className={classes.AppBar} position="static" >
            <Toolbar>
                <IconButton color="inherit" aria-label="Menu" >
                    <Menu />
                </IconButton>
                <Typography color="inherit" variant="title" >{title}</Typography>
                <div style={{ flexGrow: 1 }} />
                <div style={{ position: "relative", marginLeft: 0 }} >
                    {children}
                </div>
            </Toolbar>
        </AppBar>
    </div>
);

AppBar.propTypes = {
    children: PropTypes.element,
    classes: PropTypes.object,
    title: PropTypes.string
}
const MyAppBarwithTheme = withStyles(styles)(MyAppBar)
export default MyAppBarwithTheme
