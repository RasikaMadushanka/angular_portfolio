import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects = [
  {
    title: 'Student Management System',
    image: 'assets/images/studentManagemnt.png',
    description: 'Java-based system for managing student records efficiently.',
    tech: ['Java', 'OOP', 'File Handling'],
    github: 'https://github.com/RasikaMadushanka',
    demo: ''
  },
  {
    title: 'Imart E-Commerce',
    image: 'assets/images/imart.png',
    description: 'Modern e-commerce web application with responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/RasikaMadushanka',
    demo: ''
  },
  {
    title: 'Defence System',
    image: 'assets/images/defence.png',
    description: 'Secure system simulation project.',
    tech: ['Java', 'OOP'],
    github: 'https://github.com/RasikaMadushanka',
    demo: ''
  },
  {
    title: 'Movie API Website',
    image: 'assets/images/movieapi.png',
    description: 'API integrated movie search application.',
    tech: ['JavaScript', 'API', 'Bootstrap'],
    github: 'https://github.com/RasikaMadushanka',
    demo: ''
  },
  {
    title: 'Tourists Website',
    image: 'assets/images/tourists.png',
    description: 'Tourism website showcasing travel destinations.',
    tech: ['HTML', 'CSS'],
    github: 'https://github.com/RasikaMadushanka',
    demo: ''
  },
  {
    title: 'Weather App',
    image: 'assets/images/weather.png',
    description: 'Weather forecast application using external API.',
    tech: ['JavaScript', 'API'],
    github: 'https://github.com/RasikaMadushanka',
    demo: ''
  }
];

}
