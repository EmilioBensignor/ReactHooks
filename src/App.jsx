import { use, useState } from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState({name: 'Juan', age: 30});
  const [products, setProduct] = useState([
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 200 },
    { id: 3, nombre: 'Producto 3', precio: 300 }
  ]);

  function cambiarNombre() {
    setUsuario({...usuario, name: 'Micaela'});
  }

  function nuevoProducto() {
    const id = products.length + 1;
    const nuevo = {
      id,
      nombre: 'Producto ' + id,
      precio: 100 * id
    };
    setProduct([...products, nuevo]);
  }

  return (
    <>
      <h1>Hooks</h1>
      <p>Bienvenido {usuario.name}</p>
      <p>Edad: {usuario.age}</p>
      <button onClick={cambiarNombre} type='button'>Cambiar nombre</button>
      <button onClick={nuevoProducto} type='button'>Nuevo producto</button>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <h2>{product.nombre}</h2>
            <p>Precio: {product.precio}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App;
