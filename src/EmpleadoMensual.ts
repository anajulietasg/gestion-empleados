import { Empleado } from "./Empleado";

export class EmpleadoMensual extends Empleado {
  private _sueldoFijo: number;

  constructor(nombre: string, legajo: number, sueldoFijo: number) {         //para crear un empleado mensual, necesito tres datos: nombre, legajo y sueldo fijo.
    super(nombre, legajo);                 //le paso nombre y legajo a la clase Empleado
    this._sueldoFijo = sueldoFijo;         //guardo el sueldo fijo, propio de este empleado
  }

  calcularSueldo(): number {               //el sueldo es simplemente el monto fijo
    return this._sueldoFijo;
  }
}