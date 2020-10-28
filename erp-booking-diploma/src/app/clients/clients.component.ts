import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ClientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dataSource = ELEMENT_DATA;
columnsToDisplay = ['id','name', 'secondName', 'room', 'dateIn','dateOut'];
expandedElement: Client | null;

}

export interface Client {
id: number;
name: string;
secondName: string;
room: string;
dateIn: string; // change to Date
dateOut: string;// change to Date
description: string; 
}

const ELEMENT_DATA: Client[] = [
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  },
  {
    id: 1,
    name: 'Eugenie',
    secondName: "Chupris",
    room: 'H',
    dateIn: "5 oct",
    dateOut: "6 oct",
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }
];