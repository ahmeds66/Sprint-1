import { Component, OnInit } from '@angular/core';
import { Rockets } from '../model/rockets.model';
import { AuthService } from '../Service/auth.service';
import { RocketService } from '../Service/rocket.service';
import { constractor } from '../model/constractor.model';
@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {
  rockets:Rockets[];
  constructor(private rocketService:RocketService,
              public authService : AuthService) { 
  this.rockets=rocketService.listRockets();
}
deleteRocket(r: Rockets)
{
  //console.log(r);
  let conf = confirm("You Confirme you like to delete this element ?");
  if(conf)
    this.rocketService.deleteRocket(r);
}
  ngOnInit(): void {
  }

}
