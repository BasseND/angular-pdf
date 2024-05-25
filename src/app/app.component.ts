import { Component, ViewChild, ElementRef } from '@angular/core';

import { jsPDF } from 'jspdf';
import  pdfMake  from 'pdfmake/build/pdfmake';
import  pdfFonts  from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'generate-pdf';
}
