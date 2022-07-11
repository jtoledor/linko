import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import DatosTableProductos from '../components/DatosTableProductos';
import '../index.css'
import Loading from '../components/Loading';


class ListaProductos extends Component {
    constructor(props){
        super(props)
        this.state={
            /**Se genera el estado en vacío */
            datos:[],
            loading:false
        }
    }
    /** Se utiliza el metodo componentDidMount despues de montar el DOM para despues realizar una peticón */
    componentDidMount = () => {
        this.getData()
    }

    /** SE utiliza async y await para hacer la petición sincrona y que espere el resultado de la llamada */
    getData =  async () => {
        /** Se ocupa un loading para mostrar al usuario que se esta carga la información */
        this.setState({loading:true})
        await fetch("https://fakestoreapi.com/products",{method:'GET'}).then(async response =>{
            /** se convierte la respuesta en formato json */
            let d =await response.json()
            /** se setea la respuesta al estado del componente */
            this.setState({datos:d, loading:false})
        })

    }
    render() {
        return (
            <div className='content-list'>
                {this.state.loading ? <Loading /> : ""}
                {/** se envia la info a otro componente por medio de los props */}
                <DatosTableProductos datos={this.state.datos} />
            </div>
        );
    }
}

export default ListaProductos;