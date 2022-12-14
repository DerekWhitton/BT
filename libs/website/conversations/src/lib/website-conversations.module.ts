import { UiModule } from '@bushtrade/ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PurchaseConversationComponent } from './containers/purchase-conversation/purchase-conversation.component';
import { UiElementsModule } from '@bushtrade/ui-elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListingConversationsComponent } from './containers/listing-conversations/listing-conversations.component';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    UiElementsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ListingConversationsComponent },
      { path: 'listing/:listingId', component: ListingConversationsComponent },
      { path: 'purchase/:conversationId', component: PurchaseConversationComponent }
    ]),
  ],
  declarations: [
    PurchaseConversationComponent,
    ListingConversationsComponent
  ],
})
export class WebsiteConversationsModule {}
