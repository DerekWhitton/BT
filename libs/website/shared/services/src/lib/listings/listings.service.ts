import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG } from '@bushtrade/app-config';
import {
  ICreateOrUpdateListing,
  IListing,
  IListingDetails,
  IListingPremiumPackage,
  IListingPremiumPackageRequest,
  IListingSeller,
  IPaginatedResponse,
  ISellerListing,
  ListingType,
} from '@bushtrade/website/shared/entites';

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  private base: string;
  private version: string;
  constructor(
    @Inject(APP_CONFIG) private configuration: any,
    private httpClient: HttpClient
  ) {
    this.base = configuration.apiRoute;
    this.version = configuration.apiVersion;
  }

  loadSellerListings(sellerId: string) {
    return this.httpClient.get<IPaginatedResponse<ISellerListing>>(
      `${this.base}api/v${this.version}/Sellers/${sellerId}/Listings?page=1&perPage=100`
    );
  }

  loadSellerListing(sellerId: string, listingId: string) {
    return this.httpClient.get<ISellerListing>(
      `${this.base}api/v${this.version}/Sellers/${sellerId}/Listings/${listingId}`
    );
  }

  loadListingDetails(listingId: string) {
    return this.httpClient.get<IListingDetails>(
      `${this.base}api/v${this.version}/Listing/ListingDetails/${listingId}`
    );
  }

  getSellerSummary(listingId: string) {
    return this.httpClient.get<IListingSeller>(
      `${this.base}api/v${this.version}/Listing/GetSellerSummary/${listingId}`
    );
  }

  getFavorites(listingType: ListingType) {
    return this.httpClient.get<IListing[]>(
      `${this.base}api/v${this.version}/Listing/GetFavorites${
        listingType != null ? `?type=${listingType}` : ''
      }`
    );
  }

  loadLatestListings(limitNumber: number) {
    return this.httpClient.get<IListing[]>(
      `${this.base}api/v${this.version}/Listing/Latest?numberOfListings=${limitNumber}`
    );
  }

  loadHomepageListings(limitNumber: number = 0) {
    var queryString = '';
    if (limitNumber > 0) {
      queryString = `?numberOfListings=${limitNumber}`;
    }
    return this.httpClient.get<IListing[]>(
      `${this.base}api/v${this.version}/Listing/HomepageListings${queryString}`
    );
  }

  loadAuctionsClosing(limitNumber: number) {
    return this.httpClient.get<IListing[]>(
      `${this.base}api/v${this.version}/Listing/AuctionsClosing?numberOfListings=${limitNumber}`
    );
  }

  getPremiumPackageHistory(sellerId: string, listingId: string) {
    return this.httpClient.get<IListingPremiumPackage[]>(
      `${this.base}api/v${this.version}/Sellers/${sellerId}/Listings/PremiumPackageHistory?listingId=${listingId}`
    );
  }

  updateSellerListing(
    sellerId: string,
    listingId: string,
    listing: ICreateOrUpdateListing
  ) {
    return this.httpClient.patch<ISellerListing>(
      `${this.base}api/v${this.version}/Sellers/${sellerId}/Listings/${listingId}`,
      {
        ...listing,
      }
    );
  }

  deleteSellerListing(sellerId: string, listingId: string) {
    return this.httpClient.delete<any>(
      `${this.base}api/v${this.version}/Sellers/${sellerId}/Listings/${listingId}`
    );
  }

  uploadSellerListingImage(sellerId: string, file: File) {
    let formData = new FormData();
    formData.append('file', file, file.name);
    return this.httpClient.post<string>(
      `${this.base}api/v${this.version}/Sellers/${sellerId}/Listings/UploadImage`,
      formData
    );
  }

  addSellerListing(sellerId: string, listing: ICreateOrUpdateListing) {
    return this.httpClient.post<ISellerListing>(
      `${this.base}api/v${this.version}/Sellers/${sellerId}/Listings`,
      {
        ...listing,
      }
    );
  }

  addListingPremiumPackage(sellerId: string, listingPremiumPackage: IListingPremiumPackageRequest) {
    return this.httpClient.post<IListingPremiumPackage>(
      `${this.base}api/v${this.version}/Sellers/${sellerId}/AddPremiumPackage`,
      {
        ...listingPremiumPackage,
      }
    );
  }

  addFavorite(listingId: string) {
    return this.httpClient.post<string>(
      `${this.base}api/v${this.version}/Listing/AddFavorite`,
      {
        listingId
      }
    );
  }

  removeFavorite(listingId: string) {
    return this.httpClient.post<string>(
      `${this.base}api/v${this.version}/Listing/RemoveFavorite`,
      {
        listingId
      }
    );
  }
}
