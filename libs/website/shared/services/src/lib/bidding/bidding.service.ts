import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG } from '@bushtrade/app-config';
import {
  IBid,
  IBidRequest,
  IPurchase,
} from '@bushtrade/website/shared/entites';

@Injectable({
  providedIn: 'root',
})
export class BiddingService {
  private base: string;
  private version: string;
  constructor(
    @Inject(APP_CONFIG) private configuration: any,
    private httpClient: HttpClient
  ) {
    this.base = configuration.apiRoute;
    this.version = configuration.apiVersion;
  }

  getListingBids(listingId: string) {
    return this.httpClient.get<IBid[]>(
      `${this.base}api/v${this.version}/Bidding/GetBids/${listingId}`
    );
  }

  getUserBid(listingId: string) {
    return this.httpClient.get<IBid>(
      `${this.base}api/v${this.version}/Bidding/GetUserBid/${listingId}`
    );
  }

  getHighestBid(listingId: string) {
    return this.httpClient.get<IBid>(
      `${this.base}api/v${this.version}/Bidding/GetHighest/${listingId}`
    );
  }

  placeBid(bid: IBidRequest) {
    return this.httpClient.post<IBid>(
      `${this.base}api/v${this.version}/Bidding/PlaceBid`,
      {
        ...bid,
      }
    );
  }

  purchaseListing(listingId: string) {
    return this.httpClient.post<IPurchase>(
      `${this.base}api/v${this.version}/Bidding/Purchase`,
      {
        listingId,
      }
    );
  }
}
