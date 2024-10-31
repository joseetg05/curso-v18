import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostCreateComponent } from './Posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './Posts/post-list/post-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostCreateComponent, HeaderComponent, PostListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
