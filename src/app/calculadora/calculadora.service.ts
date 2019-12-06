import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Calculadora } from "./calculadora.model";

@Injectable({
  providedIn: "root"
})
export class CalculadoraService {
  private readonly API = `${environment.API}api/calcula`;
  constructor(private http: HttpClient) {}

  public calcula(data): Observable<Calculadora> {
    console.log("service", data);
    return this.http.post<Calculadora>(this.API, data);
  }
}
