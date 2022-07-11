import React from "react"
import Grid from '@mui/material/Grid';
import '../index.css'
import { useNavigate } from "react-router-dom";


export default function DatosTableProductos(props){
    const navigate = useNavigate();
    /** Usamos el metodo useNavigate para navegar al siguiente path /products/:id */
    const handleClickItem = (id) => e => {
        /** para prevenir el comportamiento por defecto usamos  preventDefault*/
    e.preventDefault()
        navigate('/products/'+id);
    }
       
    return (
    <>
         <Grid container spacing={4}>
             {/** iteramos el arreglo de la información */}
            {props.datos.map((d,k )=> (
                /** al hacer click en un producto, se ejecuta el metodo 
                 * handleClickItem enviando el id como parametro al metodo */
                <Grid item xs={6}  key={k} className="content-item" onClick={handleClickItem(d.id)}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item xs={12}>
                            <img width={150} height={150} src={d.image} alt={d.title}/>
                        </Grid>
                        <Grid item xs={12}>
                            <span>{d.title}</span>
                        </Grid>
                        <Grid item xs={12}>
                        <span className="price">$ {d.price}</span>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
           
       </Grid>
    </>
    )
}