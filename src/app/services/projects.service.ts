import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "TFG_AMPA", pictures: ["assets/APKEjemplo.jpg","assets/firebaseEjemplo.jpg"], projectLink: "https://github.com/Tamuzur/proyectoTFGAMPA", summary: "Desarrollamos en equipo una app móvil para nuestro TFG, mejorando la comunicación con mensajería, autenticación y gestión de actividades.", description: "Este proyecto consiste en una aplicación sencilla desarrollada en Android Studio con Java, diseñada para mejorar la comunicación dentro de una organización educativa. La aplicación cuenta con un sistema de autenticación basado en Firebase, permitiendo a los usuarios registrarse e iniciar sesión de manera segura. Entre sus principales funciones, incluye un sistema de mensajería para la comunicación entre usuarios, gestión de roles con distintos niveles de acceso, un portal de anuncios donde se pueden publicar y visualizar información relevante, y un sistema de actividades que permite a los usuarios acceder y registrarse en eventos organizados por la institución. Para el diseño y la planificación de la aplicación, utilizamos Figma para definir la interfaz de usuario y Lucid para diagramar la estructura y el flujo de la aplicación. Esto nos permitió organizar mejor las funcionalidades antes de la implementación. El desarrollo de la aplicación se centró en la simplicidad y facilidad de uso, priorizando una interfaz clara y accesible. Se utilizó Firebase como base de datos para almacenar la información de usuarios, mensajes, anuncios y actividades en la nube, asegurando sincronización en tiempo real. Este proyecto me ha permitido mejorar mis habilidades en el desarrollo de aplicaciones móviles, el uso de tecnologías como Firebase y la importancia de una buena planificación previa para optimizar el proceso de desarrollo. ", tags: [Tag.JAVA]},
  ];

  constructor() { }

  GetProjects() {
    return this.projects;

  }

  GetProjectById(id: number) : Project {
     let project = this.projects.find (project => project.id === id);

     if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
     }

     return project;
  }
}
