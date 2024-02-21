import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  otherExpCard: any = [
    {
      title: 'Crewbella',
      period: 'Feb 2022 - Apr 2022',
      stack: ['html', 'css', 'js', 'react'],
      weblink: 'https://crewbella.com/',
      profile: '../../../assets/images/crewbella.jpg',
      cert: '../../../assets/pdfs/crewbella-certificate.pdf',
      class: 'oecard crebella'
    },
    {
      title: 'Mental Sphere',
      period: 'May 2021 - Aug 2021',
      stack: ['html', 'css', 'js', 'react'],
      weblink: 'https://mental-sphere-web-ten.vercel.app/',
      profile: '../../../assets/images/mindtree.jpg',
      cert: '../../../assets/pdfs/ms-certificate.pdf',
      class: 'oecard ms'
    }
  ]

  projectCard: any = [
    {
      icon: '../../../assets/images/algorithm-96.png',
      title: 'Algorithm Visualizer',
      link: 'https://visualizer-v2.web.app/',
      git: 'https://github.com/biky-mandal/youtubeclone'
    },
    {
      icon: '../../../assets/images/youtube-240.png',
      title: 'Youtube Clone',
      link: 'https://biky-mandal.github.io/youtubeclone/',
      git: 'https://github.com/biky-mandal/youtubeclone'
    }
  ]
}
