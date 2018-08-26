import { ReleaseNoteItem } from './release-note-item';

export class ReleaseNote {
  version: string;
  date: string;
  releaseNoteItems: ReleaseNoteItem[];
}
