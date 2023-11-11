import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faProjectDiagram, faExclamationTriangle, faShieldAlt, faCog } from '@fortawesome/free-solid-svg-icons';

import logo from '../public/assets/logo.png'; 

export default function Root() {
  const linkStyle = {
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    marginLeft: '15px'
  };

  const navbarStyle = {
    paddingInline: '10rem',
    display: 'flex',
    justifyContent: 'space-between',
  };

  const iconStyle = {
    marginRight: '5px',
  };

  const itemLabelSelectStyle = {
    marginRight: '10px',
    fontWeight: 'bold'
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={navbarStyle}>
      <div className="navbar-brand">
        <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
      </div>
      <div style={{...navbarStyle, ...linkStyle}}>
        <a style={itemLabelSelectStyle}>Proyecto:</a>
        <select className="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/" style={linkStyle}>
              <FontAwesomeIcon icon={faHome} style={iconStyle}/>
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/riesgos" style={linkStyle}>
              <FontAwesomeIcon icon={faExclamationTriangle} style={iconStyle}/>
              Riesgos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/seguridad" style={linkStyle}>
              <FontAwesomeIcon icon={faShieldAlt} style={iconStyle}/>
              Seguridad
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/incidencias" style={linkStyle}>
              <FontAwesomeIcon icon={faExclamationTriangle} style={iconStyle}/>
              Incidencias
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/configuracion" style={linkStyle}>
              <FontAwesomeIcon icon={faCog} style={iconStyle}/>
              Configuración
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
