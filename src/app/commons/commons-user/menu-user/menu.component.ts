import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { SecurityService } from 'src/app/services/security.service';
@Component({
  selector: 'app-menu-user',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class MenuUserComponent implements OnInit {

  @Output() unlogin = new EventEmitter();

  constructor(private securityService: SecurityService) { }

  ngOnInit(): void {
  }
  getOut(): void{
    this.securityService.userActive = undefined;
    this.unlogin.emit();
  }

}
