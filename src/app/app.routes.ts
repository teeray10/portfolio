import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { StoreComponent } from '@pages/store/store.component';
import { TranscribeComponent } from '@pages/transcribe/transcribe.component';

export const routes: Routes = [
  {
    path: 'transcribe',
    component: TranscribeComponent,
  },
  {
    path: 'store',
    component: StoreComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];
