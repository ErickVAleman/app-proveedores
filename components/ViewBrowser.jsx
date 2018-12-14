import { InputAdornment, FormControl, Input, Grid } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import PropTypes from "prop-types";

const ViewBrowser = ({ inputLabel }) => (
    <FormControl fullWidth>
        <Input id={`browser-input`} type="string" placeholder={inputLabel} startAdornment={
            <InputAdornment style={{ borderBottomColor: "#FFF" }} position="start" >
                <Search />
            </InputAdornment>
        }/>
    </FormControl>
);

ViewBrowser.propTypes = {
    inputLabel: PropTypes.string,
}

export default ViewBrowser;