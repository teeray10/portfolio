import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  PutObjectCommand,
  PutObjectCommandInput,
  S3Client,
} from '@aws-sdk/client-s3';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';
import { TranscribeService } from '@pages/transcribe/transcribe.service';

@Component({
  selector: 'tr-new-transcript',
  standalone: true,
  imports: [],
  templateUrl: './new-transcript.component.html',
})
export class NewTranscriptComponent {
  @Output() onViewChange = new EventEmitter<'list' | 'new'>();
  transcribeService = inject(TranscribeService);
  transcribeInProgress = false;
  region = 'af-south-1';
  bucket = 'udemy-23623';
  uploadInProgress = false;
  uploadSuccess = false;
  uploadedFileUrl = '';
  file!: File | null;

  s3Client = new S3Client({
    region: this.region,
    credentials: fromCognitoIdentityPool({
      clientConfig: { region: this.region }, // Configure the underlying CognitoIdentityClient.
      identityPoolId: 'af-south-1:2d19ca7b-95e7-4f1f-a116-283936990f1d',
    }),
  });

  onFileChange(event: any) {
    this.resetUpload();
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

  async uploadFile() {
    if (!this.file) return;
    this.resetUpload();
    this.uploadInProgress = true;

    const input: PutObjectCommandInput = {
      Bucket: this.bucket,
      Key: this.file.name,
      Body: this.file,
    };

    const command = new PutObjectCommand(input);
    const data = await this.s3Client.send(command);

    if (
      data.$metadata.httpStatusCode! >= 200 &&
      data.$metadata.httpStatusCode! < 300
    ) {
      this.uploadedFileUrl = `https://${this.bucket}.s3.${this.region}.amazonaws.com/${this.file.name}`;
      this.uploadSuccess = true;
      this.transcribeInProgress = true;
      this.file = null;
      const transcript = this.transcribeService.transcribe(
        this.uploadedFileUrl
      );

      setTimeout(() => {
        this.onViewChange.emit('list');
      }, 5000);
    }
  }

  private resetUpload(): void {
    this.uploadedFileUrl = '';
    this.uploadSuccess = false;
    this.uploadInProgress = false;
    this.transcribeInProgress = false;
  }
}
