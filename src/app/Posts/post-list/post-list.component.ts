import { Component, Input } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { Post } from '../post-mode';
@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [MatExpansionModule, CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  // posts = [
  //   {title: 'First Post', content: 'This is the first post\'s Content'},
  //   {title: 'Second Post', content: 'This is the second post\'s Content'},
  //   {title: 'Third Post', content: 'This is the third post\'s Content'}
  // ]
  @Input() posts: Post[] = []
}
