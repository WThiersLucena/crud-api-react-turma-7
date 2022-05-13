import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ClienteList from './List/ClienteList'
import { baseUrl } from '../../environments'



function Cliente (props) {

    const URL = `${baseUrl}/customer`
    const [clientes, setClientes] = useState([])

    useEffect(() => {
        getClientes()
    }, [])

    const getClientes = () => {
        axios.get(`${URL}`).then((response) => {
            setClientes(response.data)
        })
    }
   
   
   
    // METODO PARA EDITAR CLIENTE
    const edidtCliente = (cliente) => {
        if (cliente.description === '') {
            return
        }

        axios.put(`${URL}/${cliente.id}`, cliente)
        .then((response) => {
            getClientes()
        })
    }
    
   

    return(
        <>
        <ClienteList clientes ={clientes} 
            edidtCliente={edidtCliente}/>
        </>
    )
}

export default Cliente