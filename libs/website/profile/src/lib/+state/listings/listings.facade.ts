import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromListings from './listings.reducer';
import * as ListingsSelectors from './listings.selectors';

@Injectable()
export class ListingsFacade {
  loaded$ = this.store.pipe(select(ListingsSelectors.getListingsLoaded));
  allListings$ = this.store.pipe(select(ListingsSelectors.getAllListings));
  selectedListings$ = this.store.pipe(select(ListingsSelectors.getSelected));
  imageIds$ = this.store.pipe(select(ListingsSelectors.getImageIds));
  lastKnownError$ = this.store.pipe(select(ListingsSelectors.getListingsError));
  listingSaved$ = this.store.pipe(select(ListingsSelectors.getListingSaved));

  constructor(private store: Store<fromListings.ListingsPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
