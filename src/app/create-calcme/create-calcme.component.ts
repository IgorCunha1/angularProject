import { Component, OnInit } from '@angular/core';
import { CalcmeService } from './../calcme.service';
import { Calcme } from '../calcme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-calcme',
  templateUrl: './create-calcme.component.html',
  styleUrls: ['./create-calcme.component.scss']
})
export class CreateCalcmeComponent implements OnInit {

  calcme: Calcme = new Calcme();

  constructor(private calcmeService: CalcmeService,
    private router: Router) { }

  ngOnInit(): void {
  }

    saveCalcme(){
      this.calcmeService.createCalcme(this.calcme).subscribe( data =>{
        console.log(data);
        this.gotoCalcmeList();
      },
     error => console.log(error));
    }

    gotoCalcmeList(){
      this.router.navigate(['/calcme']);
    }

  onSubmit(){
    console.log(this.calcme);
    this.saveCalcme();
  }
}
