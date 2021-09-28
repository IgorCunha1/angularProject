

import { Component, OnInit } from '@angular/core';
import { Calcme } from '../calcme';
import { CalcmeService } from '../calcme.service';

@Component({
  selector: 'app-calcme-list',
  templateUrl: './calcme-list.component.html',
  styleUrls: ['./calcme-list.component.scss']
})
export class CalcmeListComponent implements OnInit {

  calcmes: Calcme[];
  constructor(private calcmeService: CalcmeService) { }

  ngOnInit(): void {
    this.getCalcme();
  }

  private getCalcme(){
    this.calcmeService.getCalcmeList().subscribe(data => {
      this.calcmes = data;
    });

  }
}
