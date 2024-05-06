import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { TrangchuComponent } from './components/trangchu/trangchu.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterOutlet,
        LoginComponent,
        HttpClientModule,
        TrangchuComponent,
        HeaderComponent,
        FooterComponent
    ]
})
export class AppComponent {
  title = 'client-view';
}
