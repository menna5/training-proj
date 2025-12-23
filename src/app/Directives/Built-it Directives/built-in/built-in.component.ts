import { Component } from '@angular/core';
import { CustomDirDirective } from '../../Custom Directive/custom-dir.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-built-in',
  imports: [CustomDirDirective, FormsModule, CommonModule, ReactiveFormsModule] ,
  templateUrl: './built-in.component.html',
  styleUrl: './built-in.component.css'
})
export class BuiltInComponent {
  checkedNgIf: boolean = false;
  source = [
    {text: 'one', id: 1},
    {text: 'two', id: 2},
    {text: 'three', id: 3},
    {text: 'four', id: 4},
    {text: 'five', id: 5},
  ]
  ngForList = [
    {text: 'one', id: 1},
    {text: 'two', id: 2},
    {text: 'three', id: 3},
    {text: 'four', id: 4},
    {text: 'five', id: 5},
  ];
}
