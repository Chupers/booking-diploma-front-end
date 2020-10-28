import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class StaffComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['id','name', 'secondName', 'workPosition', 'inWork'];
  expandedElement: Employer | null;

}

export interface Employer {
  id: number;
  name: string;
  secondName: string;
  workPosition: string;
  inWork: string;
  description: string; 
  }
  
  const ELEMENT_DATA: Employer[] = [
    {
      id: 1,
      name: 'Eugenie',
      secondName: "Chupris",
      workPosition: 'H',
      inWork: "yes",
      description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
          atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
    },{
      id: 1,
      name: 'Eugenie',
      secondName: "Chupris",
      workPosition: 'H',
      inWork: "yes",
      description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
          atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
    },
    {
      id: 1,
      name: 'Eugenie',
      secondName: "Chupris",
      workPosition: 'H',
      inWork: "yes",
      description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
          atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
    },
    {
      id: 1,
      name: 'Eugenie',
      secondName: "Chupris",
      workPosition: 'H',
      inWork: "yes",
      description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
          atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
    },
    {
      id: 1,
      name: 'Eugenie',
      secondName: "Chupris",
      workPosition: 'H',
      inWork: "yes",
      description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
          atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
    },
    {
      id: 1,
      name: 'Eugenie',
      secondName: "Chupris",
      workPosition: 'H',
      inWork: "yes",
      description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
          atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
    },
    {
      id: 1,
      name: 'Eugenie',
      secondName: "Chupris",
      workPosition: 'H',
      inWork: "yes",
      description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
          atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
    },
    {
      id: 1,
      name: 'Eugenie',
      secondName: "Chupris",
      workPosition: 'H',
      inWork: "yes",
      description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
          atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
    },
    {
      id: 1,
      name: 'Eugenie',
      secondName: "Chupris",
      workPosition: 'H',
      inWork: "yes",
      description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
          atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
    },
    {
      id: 1,
      name: 'Eugenie',
      secondName: "Chupris",
      workPosition: 'H',
      inWork: "yes",
      description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
          atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
    },

  ];