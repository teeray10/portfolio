import {Component, inject} from '@angular/core';
import {PutObjectCommand, PutObjectCommandInput, S3Client} from '@aws-sdk/client-s3';
import {fromCognitoIdentityPool} from '@aws-sdk/credential-providers';
import {TranscribeService} from 'src/app/features/transcribe/transcribe.service';
import {TranscriptListComponent} from 'src/app/features/transcribe/components/transcription-list/transcript-list.component';
import {NewTranscriptComponent} from 'src/app/features/transcribe/components/new-transcript/new-transcript.component';


@Component({
  selector: 'tr-transcribe',
  standalone: true,
  imports: [
    TranscriptListComponent,
    NewTranscriptComponent
  ],
  templateUrl: './transcribe.component.html',
})
export class TranscribeComponent {
  view: 'list' | 'new' = 'list';
  transcribeService = inject(TranscribeService);
  region = 'af-south-1';
  bucket = 'udemy-23623';
  uploadedFileUrl = '';
  file!: File;
  transcribedText: string | null | undefined = '';

  s3Client = new S3Client({
    region: this.region,

    credentials:
    //   {
    //   accessKeyId: 'AKIAU6GD2IUGVOI244EL',
    //   secretAccessKey: '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'
    // }

      fromCognitoIdentityPool({

        clientConfig: {region: this.region}, // Configure the underlying CognitoIdentityClient.
        identityPoolId: 'af-south-1:2d19ca7b-95e7-4f1f-a116-283936990f1d',
        // logins: {
        //   // Optional tokens, used for authenticated login.
        // },
      })
  });

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      console.log('file => transcribe.component.ts', this.file.name);
    }

  }

  async uploadFile() {
    const input: PutObjectCommandInput = {
      Bucket: this.bucket,
      Key: this.file.name,
      Body: this.file
    }
    const command = new PutObjectCommand(input);
    const data = await this.s3Client.send(command);
    console.log('data => transcribe.component.ts', data);
    if (data.$metadata.httpStatusCode! >= 200 && data.$metadata.httpStatusCode! < 300) {
      this.uploadedFileUrl = `https://${this.bucket}.s3.${this.region}.amazonaws.com/${this.file.name}`;
      const transcript = await this.transcribeService.transcribe(this.uploadedFileUrl);
      this.transcribedText = transcript.text;

      // const getInput: GetObjectCommandInput = {Bucket: this.bucket, Key: 'Seasons.mp3'};
      // const getCommand = new GetObjectCommand(getInput);
      // const getData = await this.client.send(getCommand);
      // console.log('data => transcribe.component.ts', getData);
    }


    // this.fileUploadService.uploadFile(this.file)
    //   .subscribe((event: HttpEvent<any>) => {
    //     this.resetFile();
    //     switch(event.type){
    //       case HttpEventType.UploadProgress:
    //         this.progress = Math.round(event.loaded / event.total * 100);
    //         break;
    //       case HttpEventType.ResponseHeader:
    //         if(event.status == 200){
    //           this.toastrService.success("File was uploaded successfully");
    //         }
    //         if(event.status == 500){
    //           this.toastrService.error("Error while uploading file");
    //         }
    //     }
    //   });
  }

}
