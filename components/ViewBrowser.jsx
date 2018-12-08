import { Grid, InputLabel, InputAdornment, FormControl, Input } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const id = v4();

const ViewBrowser = ({ inputLabel }) => (
    <FormControl>
        <Input id={`browser-input-${id}`} placeholder={inputLabel} startAdornment={
            <InputAdornment position="start" >
                <Search />
            </InputAdornment>
        } />
    </FormControl>
);

ViewBrowser.propTypes = {
    inputLabel: PropTypes.string,
}

export default ViewBrowser;