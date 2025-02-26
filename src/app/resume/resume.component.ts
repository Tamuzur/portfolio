import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  isWorkExperienceOpen: boolean = false;
  isEducationOpen: boolean = false;
  isCertificationsOpen: boolean = false;
  isSkillsOpen: boolean = false;


    constructor(private titleService : Title, private renderer:Renderer2) {
      this.titleService.setTitle('Alejandro Valentin - Resume')
    }

    DownloadFile() {
      const link = this.renderer.createElement('a');
      link.setAttribute('target','_blank');
      link.setAttribute('href','link al pdf');
      link.setAttribute('download','Nombre del Archivo');
      link.click();
      link.remove();
    }

}
