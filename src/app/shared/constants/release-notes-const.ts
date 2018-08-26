import { ReleaseNote } from '../models/release-note';
import { ReleaseNoteItem } from '../models/release-note-item';

export const RELEASE_NOTES: ReleaseNote[] = [
  { version: '1.0.1', date: '20180827',
    releaseNoteItems: [
      {
        type: 'fixed',
        title: 'title title',
      },
    ],
  },
  { version: '1.0.0', date: '20180826',
    releaseNoteItems: [
      {
        type: 'fixed',
        title: 'title title',
      },
    ],
  },
];
