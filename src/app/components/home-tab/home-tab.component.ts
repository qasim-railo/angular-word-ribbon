import { Component } from '@angular/core';

@Component({
  selector: 'app-home-tab',
  standalone: true,
  imports: [],
  templateUrl: './home-tab.component.html',
  styleUrl: './home-tab.component.scss'
})
export class HomeTabComponent {
handleAction(action: string): void {
    const editor = document.getElementById('editor');
    if (!editor) return;

    editor.focus();

    switch (action) {
      case 'bold':
      case 'italic':
      case 'underline':
      case 'cut':
      case 'copy':
      case 'paste':
        document.execCommand(action);
        break;

      default:
        console.log('Action not handled:', action);
    }
  }
}