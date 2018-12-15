
import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import MyCard from "./ViewCard";
import ViewLoader from "./viewLoader";

const ListaProveedores = ({ data }) => {
    if (data) {
        if (data.length) {
            return (
                <div style={{ display: "flex", margin: 10 }}>
                    <Grid container spacing={16} >
                        {
                            data.map((item, index) => (
                                <Grid item key={`proveedor-${index}`} >
                                    <MyCard title={item.title} subtitle={item.subtitle} id={item.id? item.id : index} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </div> 
            )
        } else {
            return (
                <div style={{ width: "100%" }} >
                    <ViewLoader />
                    <Grid style={{ padding: 10 }} container xs spacing={16} direction="column" justify="center" alignItems="center" >
                        <Grid item >
                            <Typography variant="h6" color="secondary">
                                <div className="loading" >
                                    Loading...
                                </div> 
                            </Typography>
                        </Grid>
                    </Grid>
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
    data: PropTypes.arrayOf(PropTypes.object)
}
export default ListaProveedores