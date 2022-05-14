import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ClienteList from './List/ClienteList'
import { baseUrl } from '../../environments'



function Cliente(props) {

    const URL = `${baseUrl}/customer` //Personalizando a URL aqui
    const [clientes, setClientes] = useState([])

    useEffect(() => {
        getClientes()
    }, [])

    // METODO PARA TRAZER CLIENTE
    const getClientes = () => {
        axios.get(`${URL}`)
        .then((response) => {
            setClientes(response.data)
        })
    }
   
   
   
    // METODO PARA EDITAR CLIENTE
    const editCliente = (cliente) => {
        if (cliente.name === '' || cliente.age === '' || cliente.document ===''||
            cliente.tel === '') {
            return
        }

        axios.put(`${URL}/${cliente.id}`, cliente)
        .then((response) => {
            getClientes()
        })
    }


    // METODO DE DELETAR
    const deleteCliente = (id) => {
         axios.delete(`${URL}/${id}`).then((response) => {
            getClientes()
        })
    }
    
   

    return(
        <>
        <ClienteList
             clientes ={clientes} 
             editar={editCliente}
             deletar={deleteCliente}/>
        </>
    )
}

export default Cliente