import { Component, OnInit } from '@angular/core';
import { ReleaseNote } from '../shared/models/release-note';
import { RELEASE_NOTES } from '../shared/constants/release-notes-const';

@Component({
  selector: 'app-release-notes',
  templateUrl: './release-notes.component.html',
  styleUrls: ['./release-notes.component.scss']
})
export class ReleaseNotesComponent implements OnInit {
  releaseNotes: ReleaseNote[] = RELEASE_NOTES;

  constructor() { }

  ngOnInit() {
  }

}
