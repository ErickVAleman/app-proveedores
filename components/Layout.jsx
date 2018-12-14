import AppBar from "./AppBar";
import PropTypes from "prop-types";

const Layout = ({ children, title, browser }) =>(
    <div style={{ flexGrow: 1 }} >
        <AppBar title={title} >
            { browser }
        </AppBar>
        <main>{ children }</main>
    </div>
);

Layout.propTypes = {
    children:  PropTypes.element,
    title: PropTypes.string,
    browser: PropTypes.element,
}

export default Layout