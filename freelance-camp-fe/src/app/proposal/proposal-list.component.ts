import { Component } from '@angular/core';

import { Proposal } from './proposal';

@Component({
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {

  proposalOne: Proposal = new Proposal(
    1,                      // id
    'ABC Company',          // customer
    'http://portfolio.com', // portfolio_url
    'Ruby on Rails',        // tools
    150,                    // estimated_hours
    15,                     // hourly_rate
    10,                     // weeks_to_complete
    'client@example.com'
  )

  proposalTwo: Proposal = new Proposal(
    2,                      // id
    'XYZ Company',          // customer
    'http://portfolio.com', // portfolio_url
    'Ruby on Rails',        // tools
    150,                    // estimated_hours
    15,                     // hourly_rate
    10,                     // weeks_to_complete
    'client@example.com'
  )

  proposalThree : Proposal = new Proposal(
    3,                      // id
    'Something Company',    // customer
    'http://portfolio.com', // portfolio_url
    'Ruby on Rails',        // tools
    150,                    // estimated_hours
    15,                     // hourly_rate
    10,                     // weeks_to_complete
    'client@example.com'
  )

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]

}
