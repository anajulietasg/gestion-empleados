import { Empleado } from "./Empleado";

export class EmpleadoPorComision extends Empleado {
    private _valorComision: number;
    private _ventas: number;
    private _sueldoBase: number;

    constructor(nombre: string, legajo: number, valorComision: number, ventas: number, sueldoBase: number) {
        super(nombre, legajo);
        this._valorComision = valorComision;
        this._ventas = ventas;
        this._sueldoBase = sueldoBase;
    }

    calcularSueldo(): number {
        return this._sueldoBase + (this._valorComision * this._ventas);
    }
}
