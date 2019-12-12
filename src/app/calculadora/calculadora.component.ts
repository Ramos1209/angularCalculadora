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
  public tipoOperacao = new TipoOperacao();

  constructor(private calculaService: CalculadoraService) {}

  ngOnInit() {}

  calcualar() {
    console.log("here", this.data);
    this.calculaService.calcula(this.data).subscribe(resp => {
      this.data = resp;
    });
  }
}
