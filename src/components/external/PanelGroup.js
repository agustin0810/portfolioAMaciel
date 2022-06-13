import React from 'react';
import {Panel, PanelGroup} from 'rsuite'
import 'rsuite/dist/rsuite.min.css';
import styles from '../Content/Content.module.css'

const PanelGrp = (props) => (
  <PanelGroup accordion bordered className={styles.panelgroup}>
      <Panel className={styles.panel} header="Información personal">
        <ul style={{listStyleType: 'none'}}>
            <li><h4>Fecha de nacimiento: 08/10/2002</h4></li>
            <li><h4>Ciudad: Rosario, Colonia</h4></li>
            <li><h4>Celular: 098456813</h4></li>
            <li><h4>E-Mail: agustinmaciel0810@gmail.com</h4></li>

        </ul>
      </Panel>
      <Panel className={styles.panel} header="Experiencia educativa">
        <ul style={{listStyleType: 'none'}}>
            <li><h4>Analista Programador: 2021-2022</h4></li>
            <li><h4>Bachillerato informática: 2018-2020</h4></li>
            <li><h4>Inglés: 2008-2020</h4></li>
        </ul>
      </Panel>
      <Panel className={styles.panel} header="Experiencia laboral">
        <ul style={{listStyleType: 'none'}}>
            <li><h4>IBM (full-stack-developer): 2021-2022</h4>
            <h5>Pasantía de un año donde comencé a incorporar conocimientos en tecnologías de la nube
              y desarrollo. Enfoque técnico en Docker, Kubernetes, OpenShift, desarrollo back-end, desarrollo front-end
            </h5>
            </li>
            <br />
            <li><h4>INCO (Consultor IT): 2022-actualidad</h4>
            <h5>Incorporación en equipo de trabajo enfocado en tecnologías y migraciones a la nube
              de Atlassian, AWS, IBM Cloud. Desarrollo de conocimientos en herramientas como Jira, Trello, etc.
            </h5>
            </li>
        </ul>
      </Panel>
    </PanelGroup>
  );
  
  export default PanelGrp;