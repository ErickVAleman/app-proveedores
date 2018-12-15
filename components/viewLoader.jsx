import { LinearProgress, createMuiTheme, MuiThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#ff5722",

        }
    }
})
const ViewLoader = () => (
    <MuiThemeProvider theme={theme} >
        <LinearProgress />
    </MuiThemeProvider>
)

export default ViewLoader