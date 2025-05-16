import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeTabComponent } from "./components/home-tab/home-tab.component";
import { InsertTabComponent } from "./components/insert-tab/insert-tab.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedTab = 'home';

  ribbonTabs = [
    {
      id: 'home',
      label: 'Home',
      groups: [
        {
          label: 'Clipboard',
          buttons: [
            { label: 'Paste', icon: '<i class="bi bi-clipboard"></i>', action: 'paste' },
            { label: 'Cut', icon: '<i class="bi bi-scissors"></i>', action: 'cut' },
            { label: 'Copy', icon: '<i class="bi bi-files"></i>', action: 'copy' },
          ]
        },
        {
          label: 'Font',
          buttons: [
            { icon: '<i class="bi bi-type-bold"></i>', action: 'bold' },
            { icon: '<i class="bi bi-type-italic"></i>', action: 'italic' },
            { icon: '<i class="bi bi-type-underline"></i>', action: 'underline' },
          ],
          dropdowns: [
            {
              label: 'Font Family',
              options: ['Arial', 'Courier New', 'Georgia', 'Tahoma', 'Times New Roman', 'Verdana'],
              action: 'fontName'
            },
            {
              label: 'Font Size',
              options: ['1', '2', '3', '4', '5', '6', '7'],  // Corresponds to HTML font sizes 1-7
              action: 'fontSize'
            }
          ]
        },
        {
          label: 'Alignment',
          buttons: [
            { icon: '<i class="bi bi-text-left"></i>', action: 'justifyLeft' },
            { icon: '<i class="bi bi-text-center"></i>', action: 'justifyCenter' },
            { icon: '<i class="bi bi-text-right"></i>', action: 'justifyRight' },
          ]
        },
        {
          label: 'Editing',
          buttons: [
            { icon: '<i class="bi bi-arrow-counterclockwise"></i>', action: 'undo' },
            { icon: '<i class="bi bi-arrow-clockwise"></i>', action: 'redo' },
            { icon: '<i class="bi bi-x-circle"></i>', action: 'removeFormat' }
          ]
        }


      ]
    },
    // other tabs ...
  ];



  selectTab(tabId: string): void {
    this.selectedTab = tabId;
  }

  // handleAction(action: string): void {
  //   const editor = document.getElementById('editor');
  //   if (!editor) return;

  //   editor.focus();

  //   switch (action) {
  //     case 'bold':
  //     case 'italic':
  //     case 'underline':
  //     case 'cut':
  //     case 'copy':
  //     case 'paste':
  //       document.execCommand(action);
  //       break;

  //     case 'insertImage':
  //       const url = prompt('Enter image URL');
  //       if (url) document.execCommand('insertImage', false, url);
  //       break;

  //     case 'insertTable':
  //       editor.innerHTML += `
  //       <table border="1" cellpadding="5">
  //         <tr><th>Header 1</th><th>Header 2</th></tr>
  //         <tr><td>Row 1</td><td>Data</td></tr>
  //       </table><br>`;
  //       break;

  //     default:
  //       console.log(`Unhandled action: ${action}`);
  //   }
  // }
  handleAction(action: string) {
    const editor = document.getElementById('editor');
    if (!editor) return;

    editor.focus();
    document.execCommand(action, false);
  }

  handleDropdownAction(action: string, value: string) {
    const editor = document.getElementById('editor');
    if (!editor) return;

    editor.focus();

    switch (action) {
      case 'fontName':
        document.execCommand('fontName', false, value);
        break;
      case 'fontSize':
        document.execCommand('fontSize', false, value);
        break;
      default:
        console.log('Dropdown action not handled:', action);
    }
  }

}