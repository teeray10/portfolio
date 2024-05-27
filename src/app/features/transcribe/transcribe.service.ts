import {Injectable, signal, WritableSignal} from '@angular/core';
import {AssemblyAI, TranscriptListItem} from 'assemblyai';
import {Document, Packer, Paragraph, TextRun} from 'docx';

@Injectable({
  providedIn: 'root'
})
export class TranscribeService {
  client = new AssemblyAI({
    apiKey: '580f3f7e90b44d779916526382429cab',
  });
  FILE_URL = 'https://udemy-23623.s3.af-south-1.amazonaws.com/Seasons.mp3';
// Request parameters
  data = {
    audio_url: 'https://udemy-23623.s3.af-south-1.amazonaws.com/Seasons.mp3'
  }
  private loading = signal(false);
  private transcriptList = signal<TranscriptListItem[]>([]);
  private paragraphsList = signal<string[]>([]);

  constructor() {
  }

  getTranscriptions(): void {
    // this.loading.update(x => !x);
    this.client.transcripts.list().then(tl => this.transcriptList.set(tl.transcripts));
  }

  transcribe(audioUrl: string): Promise<any> {
    return this.client.transcripts.transcribe({audio_url: audioUrl});
  }

  refreshTranscript(id: string): void {
    this.client.transcripts.get(id).then(transcript => {
      this.transcriptList.update(tl => tl.map(t => t.id === transcript.id ? {...t, ...transcript} : t));
    })
  }

  downloadTranscript(id: string): void {
    this.paragraphsList.set([]);
    this.client.transcripts.paragraphs(id).then(t => {
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: t.paragraphs.map(t => new Paragraph({children: [new TextRun(t.text)]}))
          }
        ],
      });
      console.log('doc => transcribe.service.ts', doc);
      Packer.toBlob(doc).then((buffer) => {
        // console.log('buffer => transcribe.service.ts', buffer);
        // const blob=new Blob([bytes], {type: "application/pdf"});// change resultByte to bytes

        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(buffer);
        link.download = 'transcript.docx';
        link.click();
        // fs.writeFileSync('My Document.docx', buffer);
      });
      // this.paragraphsList.set(t.paragraphs.map(p => p.text));
      // console.log(this.paragraphsList())
      // this.transcriptList.update(tl => tl.map(t => t.id === transcript.id ? {...t, ...transcript} : t));
    })
  }

  getTranscriptList(): WritableSignal<TranscriptListItem[]> {
    return this.transcriptList;
  }

  getLoading(): WritableSignal<boolean> {
    return this.loading;
  }

  setLoading(loading: boolean): void {
    this.loading.set(loading)
  }

  // import * as fs from "fs";
  // import { Document, Packer, Paragraph, TextRun } from "docx";

// Documents contain sections, you can have multiple sections per document, go here to learn more about sections
// This simple example will only contain one section


// Used to export the file into a .docx file
// Packer.toBuffer(doc).then((buffer) => {
//   fs.writeFileSync("My Document.docx", buffer);
// });

// Done! A file called 'My Document.docx' will be in your file system.

}
