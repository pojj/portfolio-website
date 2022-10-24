import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'portfolio-website';

  project = {
    number: 1,
    img: 'assets/images/amongus.jpg',
    title: 'Joustle (Wordle Variant)',
    url: 'https://github.com/pojj/wordle-variant',
    description:
      'My orginal spin off on the game Wordle: A word game crossed with Player vs Player combat mechanics.',
  };
  project1() {
    this.project = {
      number: 1,
      img: 'assets/images/amongus.jpg',
      title: 'Joustle (Wordle Variant)',
      url: 'https://github.com/pojj/wordle-variant',
      description:
        'My orginal spin off on the game Wordle: A word game crossed with Player vs Player combat mechanics.',
    };
  }

  project2() {
    this.project = {
      number: 2,
      img: 'assets/images/Sudoku.png',
      title: 'Sudoku',
      url: 'https://github.com/pojj/Sudoku',
      description:
        'Ground up build of the game Sudoku in Java to consolidate my understanding of Java and Object Oriented Programming.',
    };
  }

  project3() {
    this.project = {
      number: 3,
      img: 'assets/images/AmongusRunner.png',
      title: '2D Platforming Game',
      url: 'https://github.com/pojj/Programming_11',
      description:
        'My orginal spin off on the game Wordle. A word game crossed with Player vs Player concepts',
    };
  }

  project4() {
    this.project = {
      number: 4,
      img: 'assets/images/tetris.png',
      title: 'Tetris Clone with Multiplayer and AI',
      url: 'https://github.com/pojj/tetris-ai',
      description:
        'My orginal spin off on the game Wordle. A word game crossed with Player vs Player concepts',
    };
  }
}
