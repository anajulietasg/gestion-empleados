import { Empleado } from "./Empleado";

export class EmpleadoPorComision extends Empleado {
    private _valorComision: number;
    private _ventas: number;
    private _sueldoBase: number;

    constructor(nombre: string, legajo: number, valorComision: number, ventas: number, sueldoBase: number) {
        super(nombre, legajo);
        this._valorComision = Math.max(0, valorComision);
        this._ventas = Math.max(0, ventas);
        this._sueldoBase = Math.max(0, sueldoBase);
    }

    calcularSueldo(): number {
        return this._sueldoBase + (this._valorComision * this._ventas);
    }

    aplicarAumento(porcentaje: number): void {
        const aumento = this._sueldoBase * (porcentaje / 100);
        this._sueldoBase += aumento;
    }
}
