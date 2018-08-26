import { Component, OnInit, Input } from '@angular/core';
import { ReleaseNote } from '../../../shared/models/release-note';

@Component({
  selector: 'app-release-note-row',
  templateUrl: './release-note-row.component.html',
  styleUrls: ['./release-note-row.component.scss']
})
export class ReleaseNoteRowComponent implements OnInit {
  @Input() releaseNote: ReleaseNote;

  constructor() { }

  ngOnInit() {
  }

}
