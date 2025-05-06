import { enableProdMode } from '@angular/core';
import { platformServer } from '@angular/platform-server';
import { AppServerModule } from './app/app.server.module';

enableProdMode();

platformServer().bootstrapModule(AppServerModule)
  .catch(err => console.error(err));
