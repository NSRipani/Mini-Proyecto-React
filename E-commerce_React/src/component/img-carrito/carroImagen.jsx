
import carritoDeCompras from '../../assets/carritoDeCompras.png'
import { useCarroContext } from '../context/context'
import './carroImagen.css'

const Carrito = () => { 
    const {cart} = useCarroContext()
    
    // Calcular la cantidad total de artículos en el carrito
    const totalItems = cart.length
    
    return (
        <div className='img-carro'>
            <img src={carritoDeCompras} alt="carrito-compras" /> 
            <p>{totalItems}</p>
        </div>
    )
}
export default Carrito
