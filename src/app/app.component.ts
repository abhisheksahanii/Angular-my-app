import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
}

export type DangerButtonType = "danger--primary" | "danger--tertiary" | "danger--ghost";
export type ButtonType = "primary" | "secondary" | "tertiary" | "ghost" | "danger" | DangerButtonType | "toolbar-action";

export type ButtonSize = "sm" | "field" | "lg" | "xl";


