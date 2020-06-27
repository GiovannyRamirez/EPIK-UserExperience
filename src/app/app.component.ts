import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiPrimerProyecto';
  datos = [];
  dashb = true;
  pass = "";
  usr = "";
  anim = "";

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('button') button:ElementRef;
  validButton(event: any) {
    if (this.pass.length > 5 && this.usr.length > 12){
      this.button.nativeElement.disabled = false;
    } else {
      this.button.nativeElement.disabled = true;
    }
  }
      
  enviarForm() {
      var dts = {
      "Email":this.usr,
      "Password":this.pass
      }
        var myInit =  {
          method: 'POST',
          headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dts)
        };

    var myRequest = new Request("https://desarrollo.epik.com.co:6637/api/prueba/login", myInit);
  
    fetch(myRequest).then((response) => {
      
      return response.json();
    }).then((myJson) => {

      if(myJson.IdError==0){
        this.dashb=false
      }else{
        alert("Verifique Usuario y/o contraseña")
        this.anim.fontcolor("red")    
      }
 
    }).catch((error) => {
  
    });
  
  }
}