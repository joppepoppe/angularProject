import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  config: any;
    fullpage_api: any;
  
    constructor() {
  
      // for more details on config options please visit fullPage.js docs
      this.config = {
  
        // fullpage options
        licenseKey: '03AB90EA-B5C441A9-B143791D-50F380AD',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        menu: '#menu',
  
        // fullpage callbacks
        afterResize: () => {
          console.log("After resize");
        },
        afterLoad: (origin:any, destination:any, direction:any) => {
          console.log(origin.index);
        }
      };
    }
  
    getRef(fullPageRef:any) {
      this.fullpage_api = fullPageRef;
    }
  
}
