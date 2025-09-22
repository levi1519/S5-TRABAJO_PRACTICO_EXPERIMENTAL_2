# Formulario de Registro Universitario

## Descripción del Proyecto

Este proyecto consiste en una aplicación web desarrollada en React que implementa un formulario de registro universitario con validaciones dinámicas en tiempo real. La aplicación fue creada como parte del trabajo práctico experimental del quinto semestre, demostrando el uso de tecnologías web modernas para crear interfaces de usuario interactivas y funcionales.

## Funcionalidades Implementadas

### ✅ Formulario de Registro
- **Campos de entrada**: Nombre, Correo electrónico y Contraseña
- **Interfaz responsive**: Adaptable a diferentes tamaños de pantalla
- **Diseño profesional**: Utilizando el framework Bootstrap 5.3.0

### ✅ Validaciones Dinámicas
- **Validación en tiempo real**: Los campos se validan mientras el usuario escribe
- **Indicadores visuales**:
  - Borde verde para campos válidos (`is-valid`)
  - Borde rojo para campos inválidos (`is-invalid`)
  - Mensajes de error específicos debajo de cada campo

### ✅ Reglas de Validación
1. **Nombre**:
   - Campo obligatorio
   - No puede estar vacío

2. **Correo electrónico**:
   - Campo obligatorio
   - Debe cumplir formato de email válido (regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)

3. **Contraseña**:
   - Longitud mínima de 8 caracteres
   - Campo obligatorio

### ✅ Control de Envío
- **Botón inteligente**: Se deshabilita automáticamente cuando hay errores de validación
- **Prevención de envío**: Solo permite enviar el formulario cuando todos los campos son válidos
- **Feedback al usuario**: Mensajes claros sobre los errores encontrados

## Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 18.2.0 | Framework principal para la interfaz de usuario |
| **JavaScript (ES6+)** | - | Lenguaje de programación |
| **Bootstrap** | 5.3.0 | Framework CSS para diseño responsive |
| **HTML5** | - | Estructura semántica |
| **CSS3** | - | Estilos personalizados |
| **Node.js** | - | Entorno de desarrollo |
| **Create React App** | - | Herramienta de configuración inicial |

## Estructura del Proyecto

```
formulario-react/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js                    # Componente principal
│   ├── FormularioRegistro.js     # Componente del formulario con validaciones
│   ├── index.js                  # Punto de entrada + Bootstrap CDN
│   ├── index.css                 # Estilos globales
│   └── ...
├── package.json
└── README.md
```

## Instalación y Ejecución

### Prerrequisitos
- **Node.js** (versión 14 o superior)
- **npm** (incluido con Node.js)

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   # Si está en un repositorio
   git clone [URL_DEL_REPOSITORIO]
   cd formulario-react
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar la aplicación**
   ```bash
   npm start
   ```

4. **Acceder a la aplicación**
   - La aplicación se abrirá automáticamente en: `http://localhost:3000`
   - Si no se abre automáticamente, navegar manualmente a esa URL

### Comandos Adicionales

```bash
# Ejecutar tests
npm test

# Crear build de producción
npm run build

# Analizar bundle de la aplicación
npm run eject
```

## Capturas de Funcionalidad

### Estado Inicial del Formulario
- Formulario limpio con campos vacíos
- Botón de envío deshabilitado hasta completar validaciones

### Validaciones en Tiempo Real
- **Campo válido**: Borde verde y sin mensajes de error
- **Campo inválido**: Borde rojo con mensaje específico del error
- **Ejemplos de mensajes**:
  - "El nombre es requerido"
  - "Formato de correo inválido"
  - "La contraseña debe tener mínimo 8 caracteres"

### Estado de Envío
- Botón habilitado solo cuando todos los campos son válidos
- Envío exitoso muestra los datos en la consola del navegador

## Aspectos Técnicos Destacados

### Gestión de Estado
- Uso de `useState` hooks para manejar el estado de los campos
- Estado separado para errores de validación
- Actualización reactiva del estado de la interfaz

### Validaciones Implementadas
- **Funciones específicas**: Una función de validación por cada campo
- **Regex para email**: Implementación robusta de validación de correo
- **Validación en tiempo real**: Triggered en eventos `onChange`

### Diseño Responsive
- **Sistema de grillas Bootstrap**: `container`, `row`, `col-md-6`
- **Clases utilitarias**: `mb-3`, `mt-4`, `d-grid`
- **Componentes Bootstrap**: `form-control`, `btn`, `form-label`

## Archivos de Limpieza Sugerida

Para optimizar el proyecto para entrega académica, se pueden eliminar los siguientes archivos no utilizados:

```bash
# Archivos que se pueden eliminar
src/App.css          # No se utiliza (estilos manejados por Bootstrap)
src/logo.svg         # Logo de React no utilizado
src/App.test.js      # Tests no implementados en este proyecto
src/setupTests.js    # Configuración de tests no necesaria
```

## Información del Desarrollador

**Proyecto**: Trabajo Práctico Experimental - Quinto Semestre
**Materia**: [Nombre de la Materia]
**Institución**: [Nombre de la Universidad]
**Fecha de Entrega**: Septiembre 2024

### Objetivos Académicos Cumplidos
- ✅ Implementación de componentes React funcionales
- ✅ Manejo de estado con hooks
- ✅ Validaciones de formularios en tiempo real
- ✅ Integración de frameworks CSS (Bootstrap)
- ✅ Aplicación de patrones de desarrollo moderno
- ✅ Código limpio y bien documentado

## Conclusiones

Este proyecto demuestra la implementación exitosa de un formulario web moderno utilizando React y Bootstrap, con un enfoque especial en la experiencia de usuario a través de validaciones dinámicas. La aplicación cumple con los estándares de desarrollo web actual y proporciona una base sólida para proyectos más complejos.

La arquitectura del código es escalable y mantenible, siguiendo las mejores prácticas de React para el manejo de estado y componentes. El uso de Bootstrap garantiza un diseño profesional y responsive sin necesidad de CSS personalizado extenso.
