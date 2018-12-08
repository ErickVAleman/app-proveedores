import AppBar from "./AppBar";
import PropTypes from "prop-types";

const Layout = ({ children, title }) =>(
    <div style={{ flexGrow: 1 }} >
        <AppBar title={title} />
        <main>{ children }</main>
    </div>
);

Layout.propTypes = {
    children:  PropTypes.element,
    title: PropTypes.string,
}

export default Layout