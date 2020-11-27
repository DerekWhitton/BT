import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ForumsIndexComponent } from './forums-index/forums-index.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ForumsIndexComponent },
    ]),
  ],
  declarations: [ForumsIndexComponent],
})
export class WebsiteForumsModule {}
