import {Routes} from '@angular/router';
import {TranscribeComponent} from 'src/app/features/transcribe/transcribe.component';
import {HomeComponent} from 'src/app/features/home/home.component';

export const routes: Routes = [
  {
    path: 'transcribe',
    component: TranscribeComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];
