import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiElementsModule } from '@bushtrade/ui-elements';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CarouselHeroBannerComponent } from './carousel-hero-banner/carousel-hero-banner.component';
import { CarouselListingItemComponent } from './carousel-listing-item/carousel-listing-item.component';
import { CategorySelectorComponent } from './category-selector/category-selector.component';
import { CategoryBlockComponent } from './category-block/category-block.component';
import { CrudTableComponent } from './crud-table/crud-table.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListingImagePreviewComponent } from './listing-image-preview/listing-image-preview.component';
import { PortalFooterComponent } from './portal-footer/portal-footer.component';
import { PortalMenuItemComponent } from './portal-menu-item/portal-menu-item.component';
import { PortalMenuComponent } from './portal-menu/portal-menu.component';
import { PortalTopBarComponent } from './portal-top-bar/portal-top-bar.component';
import { ProductItemMinimalComponent } from './product-item-minimal/product-item-minimal.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { SafeHtmlPipe } from './shared/pipes/safe-html.pipe';
import { TruncateTextPipe } from './shared/pipes/truncate-text.pipe';
import { WebsiteFooterComponent } from './website-footer/website-footer.component';
import { WebsiteMenuComponent } from './website-menu/website-menu.component';
import { SearchFacetComponent } from './search-facet/search-facet.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { SupportComponent } from './support/support.component';
import { SupportTicketComponent } from './support-ticket/support-ticket.component';
import { AdvertisementBlocksComponent } from './advertisement-blocks/advertisement-blocks.component';
import { InitiatePaymentComponent } from './initiate-payment/initiate-payment.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UiElementsModule],
  declarations: [
    PortalMenuComponent,
    CrudTableComponent,
    HeaderComponent,
    FooterComponent,
    WebsiteMenuComponent,
    PortalFooterComponent,
    PortalMenuItemComponent,
    PortalTopBarComponent,
    WebsiteFooterComponent,
    ProductItemComponent,
    ProductItemMinimalComponent,
    ProgressSpinnerComponent,
    CarouselListingItemComponent,
    CarouselHeroBannerComponent,
    CategoryBlockComponent,
    CategorySelectorComponent,
    SafeHtmlPipe,
    TruncateTextPipe,
    ListingImagePreviewComponent,
    SearchFacetComponent,
    CountdownTimerComponent,
    SupportComponent,
    SupportTicketComponent,
    AdvertisementBlocksComponent,
    InitiatePaymentComponent,
  ],
  providers: [MessageService, ConfirmationService],
  exports: [
    PortalMenuComponent,
    CrudTableComponent,
    HeaderComponent,
    FooterComponent,
    WebsiteMenuComponent,
    PortalFooterComponent,
    PortalMenuItemComponent,
    PortalTopBarComponent,
    WebsiteFooterComponent,
    ProductItemComponent,
    ProductItemMinimalComponent,
    ProgressSpinnerComponent,
    CarouselHeroBannerComponent,
    CarouselListingItemComponent,
    CategoryBlockComponent,
    CategorySelectorComponent,
    SafeHtmlPipe,
    TruncateTextPipe,
    ListingImagePreviewComponent,
    SearchFacetComponent,
    CountdownTimerComponent,
    SupportComponent,
    SupportTicketComponent,
    AdvertisementBlocksComponent,
    InitiatePaymentComponent,
  ],
})
export class UiModule {}
