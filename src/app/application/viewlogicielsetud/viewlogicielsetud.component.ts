import { Component, OnInit } from '@angular/core';
import {Logiciel} from 'src/app/interfaces/Logiciel';
import {LogicielService} from 'src/app/services/logiciel.service';
@Component({
  selector: 'app-viewlogicielsetud',
  templateUrl: './viewlogicielsetud.component.html',
  styleUrls: ['./viewlogicielsetud.component.css']
})
export class ViewlogicielsetudComponent implements OnInit {
  Logiciels:Logiciel[];

  constructor(private lg:LogicielService) { }

  ngOnInit() {

    this.lg.getAllLogiciels().subscribe(
      data => {
        this.Logiciels = data.map(
          element =>new Logiciel( 
            element.payload.doc.id,element.payload.doc.data()['name'],element.payload.doc.data()['plateform'],
            element.payload.doc.data()['photoUrl'],element.payload.doc.data()['lientel'])
          )
      })
  }

}
