import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import MyCard from "./Card";

const ListaProveedores = ({ dataProveedor }) => {
    if (dataProveedor) {
        if (dataProveedor.length) {
            return (
                <div>
                    <Grid container spacing={16} >
                        {
                            dataProveedor.map((prov, index) => (
                                <Grid item xs key={`proveedor-${index}`} >
                                    <MyCard title={prov.title} subtitle={prov.subtitle} id={prov.id? prov.id : index} />
                                </Grid>
                            ))
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