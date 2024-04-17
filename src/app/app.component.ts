import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

    setTimeout(() => {

      this.peliculasClasicas = [
        {
          title: 'The Godfather',
          year: 1972,
          genre: 'Crime, Drama',
          director: 'Francis Ford Coppola',
          rating: 9.2,
        },
        {
          title: 'The Godfather Part II',
          year: 1974,
          genre: 'Crime, Drama',
          director: 'Francis Ford Coppola',
          rating: 9.0,
        },
        {
          title: '12 Angry Men',
          year: 1957,
          genre: 'Crime, Drama',
          director: 'Sidney Lumet',
          rating: 9.0,
        }
      ];

      this.peliculasNuevas = [
        {
          title: 'The Shawshank Redemption',
          year: 1994,
          genre: 'Drama',
          director: 'Frank Darabont',
          rating: 9.3,
        },
        {
          title: 'The Dark Knight',
          year: 2008,
          genre: 'Action, Crime, Drama',
          director: 'Christopher Nolan',
          rating: 9.0,
        },
        {
          title: "Schindler's List",
          year: 1993,
          genre: 'Biography, Drama, History',
          director: 'Steven Spielberg',
          rating: 8.9,
        },
        {
          title: 'The Lord of the Rings: The Return of the King',
          year: 2003,
          genre: 'Action, Adventure, Drama',
          director: 'Peter Jackson',
          rating: 8.9,
        },
      ];
      
    }, 2000);

  }

  peliculasClasicas;
  peliculasNuevas;

}

