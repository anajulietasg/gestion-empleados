import { IPagable } from "./IPagable";

export abstract class Empleado implements IPagable {
    private _nombre: string;
    private _legajo: number;

    constructor(nombre: string, legajo: number) {
        this._nombre = nombre;
        this._legajo = legajo;
    }
    get nombre(): string {
        return this._nombre;
    }
    get legajo(): number {
        return this._legajo;
    }
    abstract calcularSueldo(): number;
    abstract aplicarAumento(porcentaje: number): void;
    
    descripcion(): string {
        return `Empleado: ${this._nombre} - Legajo: ${this._legajo}`;
    }
}
