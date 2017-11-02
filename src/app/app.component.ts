import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  switches = ['off','off','off','off','off','off','off','off','off','off']
  switch(idx){
    if(this.switches[idx]==='off'){
      this.switches[idx] = 'on'; 
    }
    else if(this.switches[idx]==='on'){
      this.switches[idx] = 'off';  
    }
  }
}
