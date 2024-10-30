import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Post } from '../post-mode';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css',
})
export class PostCreateComponent {
  enteredValue = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter<Post>();

  onAddPost() {
    const post: Post = {
      title: this.enteredTitle,
      content: this.enteredValue
    };
    this.postCreated.emit(post);
  }
}
