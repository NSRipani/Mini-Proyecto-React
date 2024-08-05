import React, { useState } from 'react';
import './orders.css'
import { useCarroContext } from '../context/context';
import Swal from 'sweetalert2';

const Orders = () => {
    const { orderSave } = useCarroContext()

    const [data, setData] = useState({
        nombre: '', direccion: '', telefono: '',email:'',});

    const handlecambio = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        orderSave(data);

        setData({nombre:'', direccion:'', telefono:'',email:''});

        // Muestra la alerta de SweetAlert
        Swal.fire({
            title: 'Formulario de compra',
            text: `Felicitaciones ${data.nombre}! Logro su compra con exito...`,
            icon: 'success',
            customClass: {
                title: 'sweetalert-title',
                content: 'sweetalert-content',
                confirmButton: 'sweetalert-button'
            },
            background: '#333',
            color: '#fff', 
            buttonsStyling: false
        });
    };

    return (
        <div className="Ordenes">
            <h2>Finalizar Compra</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre: </label>
                    <input type="text" name='nombre' value={data.nombre} onChange={handlecambio} required />
                </div>
                <div>
                    <label>Dirección: </label>
                    <input type="text" name='direccion' value={data.direccion} onChange={handlecambio} required /></div>
                <div>
                    <label>Teléfono: </label>
                    <input type="tel" name='telefono' value={data.telefono} onChange={handlecambio} required />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name='email' value={data.email} onChange={handlecambio} required />
                </div>
                <button type="submit">Confirmar Compra</button>
            </form>
        </div>
    );
};

export default Orders;