import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { Post } from '../post-mode';
import { PostService } from '../posts.service';
@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [MatExpansionModule, CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts = [
  //   {title: 'First Post', content: 'This is the first post\'s Content'},
  //   {title: 'Second Post', content: 'This is the second post\'s Content'},
  //   {title: 'Third Post', content: 'This is the third post\'s Content'}
  // ]
  posts: Post[] = [];
  private postsSub!: Subscription;

  constructor(public postsService: PostService) {}

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe()
;  }
}
