import { Empleado } from "./Empleado";

export class EmpleadoPorHora extends Empleado {
    private _valorHora: number;
    private _horasTrabajadas: number;

    constructor(nombre: string, legajo: number, valorHora: number, horasTrabajadas: number) {
        super(nombre, legajo);
        this._valorHora = Math.max(0, valorHora);
        this._horasTrabajadas = Math.max(0, horasTrabajadas);
    }

    calcularSueldo(): number {
        return this._valorHora * this._horasTrabajadas;
    }
}
