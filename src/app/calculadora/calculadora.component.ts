import { Calculadora, TipoOperacao } from "./calculadora.model";
import { Component, OnInit } from "@angular/core";
import { CalculadoraService } from "./calculadora.service";

@Component({
  selector: "app-calculadora",
  templateUrl: "./calculadora.component.html",
  styleUrls: ["./calculadora.component.css"]
})
export class CalculadoraComponent implements OnInit {
  public data: Calculadora = new Calculadora();
  public tipo = new TipoOperacao();

  constructor(private calculaService: CalculadoraService) {}

  ngOnInit() {
    console.log("init", this.data);
  }

  calcualar() {
    this.calculaService.calcula(this.data).subscribe(resp => {
      this.data = resp;
      console.log("passo1", this.data);
    });
  }
}
