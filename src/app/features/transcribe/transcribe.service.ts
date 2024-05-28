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
  private loading = signal(false);
  private transcriptList = signal<TranscriptListItem[]>([]);
  private paragraphsList = signal<string[]>([]);

  constructor() {
  }

  getTranscriptions(): void {
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
      Packer.toBlob(doc).then((buffer) => {

        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(buffer);
        link.download = 'transcript.docx';
        link.click();
      });
    })
  }

  deleteTranscript(id: string): void {
    this.client.transcripts.delete(id).then(transcript => {
      console.log('transcript => transcribe.service.ts', transcript);
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
}
