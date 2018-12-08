import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { v4 } from "uuid"
import MyCard from "./Card";

const ListaProveedores = ({ dataProveedor }) => {
    if (dataProveedor) {
        if (dataProveedor.length) {
            return (
                <div>
                    <Grid container spacing={16} >
                        {
                            dataProveedor.map((prov, key) => <Grid item xs><MyCard key={v4()} title={prov.title} subtitle={prov.subtitle} /></Grid>)
                        }
                    </Grid>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>...Loading</h1>
                </div>
            )
        }
    }
    return (
        <div>
            <h1>Error al cargar los datos</h1>
        </div>
    )
};
ListaProveedores.propTypes = {
    dataProveedor: PropTypes.array.isRequired
}
export default ListaProveedores