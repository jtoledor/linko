import { Button, Grid, TextField } from '@mui/material';
import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import '../index.css'

function DetalleProducto(props) {
    /** usamos useParams para optener los parametros de la url*/
    const {id} = useParams();
    /** Utilizamos el hook useState para las variables del estado */
    const [datos,setDatos] = React.useState({})
    const [loading,setLoading] = React.useState(false)
    const [cantidad,setCantidad] = React.useState(1)


    /** Utilizamos el hook useCallback para la petición de la información del producto */
    const fetchData = useCallback(async () => {
        setLoading(true)
        const datos = await fetch(`https://fakestoreapi.com/products/${id}`,{method:'GET'})
        const json = await datos.json()
        setDatos(json)
        setLoading(false)
    },[]);
    /** Usamos useEffect para despues de montar el DOM, haga la petición de la información del detalle del producto */
    React.useEffect(() => {

         fetchData();

    },[fetchData])

    const handleChangeCantidad = e => {
        e.preventDefault()
        setCantidad(e.target.value)
    }
    
        return (
            <div >
                {loading ? <Loading/> : ""}
                <h2 className='title'>Detalle del producto</h2>
                <Grid container  className='content'>
                    <Grid item xs={5} className="img-item">
                        <img width={400} height={400} src={datos.image ? datos.image  : "" } alt={datos.title ? datos.title : ""}></img>
                    </Grid>
                    <Grid item xs={7}>
                        <Grid container direction={'column'} spacing={2}>
                            <Grid item xs={12} className="item-title">{datos.title ? datos.title : ""}</Grid>
                            <Grid item xs={12}>{datos.rating ? datos.rating.rate : ""}</Grid>
                            <Grid item xs={12} className="item-price">${datos.price ? datos.price : "0"}</Grid>
                            <Grid item xs={12} className="item-description">{datos.description ? datos.description : ""}</Grid>
                            <Grid item xs={12} className="mt-3">
                                <Grid container >
                                    <Grid item xs={6}>
                                        <TextField className='cantidad' type={'number'} value={cantidad} onChange={handleChangeCantidad}/>
                                    </Grid>
                                    
                                    <Grid item xs={6}>
                                        <Button variant='contained' className='btn-car'>Agregar al carrito</Button>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    
}

export default DetalleProducto;