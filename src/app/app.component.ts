import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header-component/header.component';
import { PostComponent } from './post/post.component';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

const POSTS = [
  {
    title: 'post 1',
    id: '1',
    desc: 'some description 1',
    img: 'https://placehold.co/200x200',
  },
  {
    title: 'post 2',
    id: '2',
    desc: 'some description 2',
    img: 'https://placehold.co/600x400',
  },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    PostComponent,
    CommonModule,
    FormsModule,
    NgFor,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang-test';

  posts = POSTS;

  selectPost(title: any) {
    console.log('selected post: ', title);
  }

  emptyPosts() {
    this.posts = this.posts.length > 0 ? [] : POSTS;
  }
}
