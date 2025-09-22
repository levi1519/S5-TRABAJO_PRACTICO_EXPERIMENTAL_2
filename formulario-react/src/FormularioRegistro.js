import { useState } from 'react';

function FormularioRegistro() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const [errores, setErrores] = useState({
    nombre: '',
    correo: '',
    contraseña: ''
  });

  const validarNombre = (valor) => {
    if (!valor.trim()) {
      return 'El nombre es requerido';
    }
    return '';
  };

  const validarCorreo = (valor) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!valor.trim()) {
      return 'El correo es requerido';
    }
    if (!emailRegex.test(valor)) {
      return 'Formato de correo inválido';
    }
    return '';
  };

  const validarContraseña = (valor) => {
    if (valor.length < 8) {
      return 'La contraseña debe tener mínimo 8 caracteres';
    }
    return '';
  };

  const manejarCambioNombre = (e) => {
    const valor = e.target.value;
    setNombre(valor);
    const error = validarNombre(valor);
    setErrores(prev => ({ ...prev, nombre: error }));
  };

  const manejarCambioCorreo = (e) => {
    const valor = e.target.value;
    setCorreo(valor);
    const error = validarCorreo(valor);
    setErrores(prev => ({ ...prev, correo: error }));
  };

  const manejarCambioContraseña = (e) => {
    const valor = e.target.value;
    setContraseña(valor);
    const error = validarContraseña(valor);
    setErrores(prev => ({ ...prev, contraseña: error }));
  };

  const obtenerClaseInput = (campo) => {
    const valorCampo = campo === 'nombre' ? nombre : campo === 'correo' ? correo : contraseña;
    const error = errores[campo];

    if (!valorCampo) return 'form-control';
    if (error) return 'form-control is-invalid';
    return 'form-control is-valid';
  };

  const tieneErrores = () => {
    return errores.nombre || errores.correo || errores.contraseña || !nombre || !correo || !contraseña;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tieneErrores()) {
      console.log('Datos del formulario:', { nombre, correo, contraseña });
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className={obtenerClaseInput('nombre')}
                id="nombre"
                value={nombre}
                onChange={manejarCambioNombre}
              />
              {errores.nombre && (
                <div className="text-danger mt-1">{errores.nombre}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="correo" className="form-label">
                Correo
              </label>
              <input
                type="email"
                className={obtenerClaseInput('correo')}
                id="correo"
                value={correo}
                onChange={manejarCambioCorreo}
              />
              {errores.correo && (
                <div className="text-danger mt-1">{errores.correo}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="contraseña" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className={obtenerClaseInput('contraseña')}
                id="contraseña"
                value={contraseña}
                onChange={manejarCambioContraseña}
              />
              {errores.contraseña && (
                <div className="text-danger mt-1">{errores.contraseña}</div>
              )}
            </div>
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={tieneErrores()}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormularioRegistro;