import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.initSvgIcons();
  }

  private initSvgIcons(): void {
    const svgIcons = [
      { name: 'github', path: 'assets/img/toolbar/github.svg' },
      { name: 'landscape', path: 'assets/img/toolbar/landscape.svg' },
      { name: 'pigeon', path: 'assets/img/toolbar/pigeon.svg' },
    ];

    svgIcons.forEach(icon => this.iconRegistry.addSvgIcon(
        icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(icon.path)
      )
    );
  }

}
