import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  value = 1;
  constructor() { }

  ngOnInit(): void {
  }
  sum(){
    this.value = this.value + 1;
  }

}
