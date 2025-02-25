import { loadRemoteModule } from '@angular-architects/native-federation';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Injector } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'app-store';
  injector=inject(Injector);

  ngOnInit(): void {

      console.log('ngOnInit...')

      loadRemoteModule('appProducts', './Component').then((m) => {
        const ce = createCustomElement(
          m.AppComponent, {
            injector: this.injector
          }
        );

        if (!customElements.get('app-root')) {


          customElements.define('mfe-app-products', ce); // Rendirización
        }

      }).catch((err:any) => console.log(err));
     }


}
