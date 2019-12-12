export class Calculadora {
  numero1: number;
  numero2: number;
  resultado: number;
  tipoOperacao: string;
}

export class TipoOperacao {
  public get: any = [
    { id: "A", descricao: "Somar" },
    { id: "S", descricao: "Subtracao" },
    { id: "M", descricao: "Multiplicar" },
    { id: "D", descricao: "Divisao" }
  ];
}
