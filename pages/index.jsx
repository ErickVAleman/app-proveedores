
import Layout from "../components/Layout";
import { withStyles, withWidth } from "@material-ui/core"
import compose from "recompose/compose";
import ListaProveedores from "../components/ListaProveedores";
import ViewBrowser from "../components/ViewBrowser";
// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { pushDataProveedores } from "../store";

const data = [];
for( let i = 0; i <= 100; i++) {
    data.push({ title: `Proveedor ${i}`, subtitle: `${(Math.round(Math.random() * 1000))} articulos` })
}

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    container: {
        display: 'flex',
        margin: 10
    },
});

const Index = ({ classes, dataProveedores }) => (
    <div>
        <Layout title="Productos DSSPA" >
            <div className={classes.root}>
                <ViewBrowser inputLabel="Buscar" />
                <div className={classes.container} >
                    <ListaProveedores dataProveedor={dataProveedores} />
                </div>
            </div>
        </Layout>
    </div>
);

Index.getInitialProps = async ({ store, isServer, pathname, query }) => {
    store.dispatch(pushDataProveedores(data))
    const { _dataProveedores } = await store.getState()
    return {
        dataProveedores: _dataProveedores
    }
}
const mapDispathToProps = dispatch => {
    return {
        pushDataProveedores: bindActionCreators(pushDataProveedores, dispatch),
    }
}
const MyIndex = compose(withStyles(styles), withWidth())(Index)
export default connect(null, mapDispathToProps)(MyIndex)