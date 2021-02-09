import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICreateSupportTicket, SupportTicketCategory } from '@bushtrade/website/shared/entites';

@Component({
  selector: 'bushtrade-web-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  @Input() supportTickets;
  @Input() pageSize;
  @Input() loaded;
  @Input() currentPage;
  @Input() previousPage;
  @Input() nextPage;
  @Input() error;
  @Input() added;
  @Input() isAdmin;
  @Output() loadPage = new EventEmitter<any>();
  @Output() addSupportTicket = new EventEmitter<any>();
  @Output() closeSupportTicket = new EventEmitter<string>();

  selectableTicketCategories: { label: string; value: SupportTicketCategory }[];
  filters = {
    category: null,
    query: null,
    includeClosed: null
  }
  showCreateSupportTicketModal = false;
  addSupportTicketFormGroup: FormGroup = new FormGroup({
    listing: new FormControl(''),
    title: new FormControl('', Validators.required),
    message: new FormControl('', [ Validators.required, Validators.maxLength(2500) ]),
    category: new FormControl('', Validators.required)
  });

  constructor() {}

  ngOnInit(): void {
    this.selectableTicketCategories = Object.keys(SupportTicketCategory)
      .filter(s => isNaN(Number(s)))
      .map(s => {
        return { label: s, value: SupportTicketCategory[s] };
      });
    this.added.subscribe(
      (isAdded) => {
        if (isAdded)
          this.pageOrFilterAction(this.currentPage);
      }
    );
    this.pageOrFilterAction(this.currentPage);
  }

  pageOrFilterAction(page: number = null) {
    this.loadPage.emit({
      page: page ?? this.currentPage,
      perPage: this.pageSize,
      query: this.filters.query,
      category: this.filters.category,
      includeClosed: this.filters.includeClosed
    })
  }

  saveSupportTicket() {
    if (!this.addSupportTicketFormGroup.valid) {
      return;
    }
    this.addSupportTicket.emit(this.addSupportTicketFormGroup.value as ICreateSupportTicket );
    this.hideCreateSupportTicketModal();
  }

  hideCreateSupportTicketModal() {
    this.showCreateSupportTicketModal = false;
    this.addSupportTicketFormGroup.reset();
  }
}
