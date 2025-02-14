import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Tag } from '../_models/Tags';
import { Project } from '../_models/Project';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];


  constructor(private titleService : Title, private projectService: ProjectsService) {
      this.titleService.setTitle('Alejandro Valentin - Portfolio')
  }

  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }
}
