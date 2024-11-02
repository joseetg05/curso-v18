import { Routes } from '@angular/router';
import { PostListComponent } from "./Posts/post-list/post-list.component";
import { PostCreateComponent } from "./Posts/post-create/post-create.component";

export const routes: Routes = [
    { path: '', component: PostListComponent },
    { path: 'create', component: PostCreateComponent},
    { path: 'edit/:postId', component: PostCreateComponent}
];
