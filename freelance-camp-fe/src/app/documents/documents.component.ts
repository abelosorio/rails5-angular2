import { Component } from '@angular/core';

import { Document } from './document';

@Component({
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = 'Document Dashboard';

  // documents will be an array of Documents
  documents: Document[] = [
    {
      title:       'My first Doc',
      description: 'Lorem ipsum dolor sit amet...',
      file_url:    'http://google.com',
      updated_at:  '14/02/17',
      image_url:   'http://google.com'
    }, 
    {
      title:       'My second Doc',
      description: 'Lorem ipsum dolor sit amet...',
      file_url:    'http://google.com',
      updated_at:  '14/02/17',
      image_url:   'http://google.com'
    }, 
    {
      title:       'My last Doc',
      description: 'Lorem ipsum dolor sit amet...',
      file_url:    'http://google.com',
      updated_at:  '14/02/17',
      image_url:   'http://google.com'
    }
  ]

}
