import { Empleado } from "./Empleado";

export class Empresa {
    private _empleados: Empleado[] = [];

    contratar(empleado: Empleado): void {    //agrego un empleado a la lista
        this._empleados.push(empleado);
    }

    totalSueldos(): number {                   //calculo el total de sueldos a pagar
        let total = 0;
        for (const empleado of this._empleados) {   //por cada empleado de la lista de empleados, hacé esto
            total += empleado.calcularSueldo();     //sumo su sueldo al total
        }
        return total;
    }

    descripcionEmpleados(): string {           //devuelvo la descripcion de todos los empleados
        let descripcion = "";
        for (const empleado of this._empleados) {
            descripcion += empleado.descripcion() + "\n";   //"/n" es un salto de línea, para que cada empleado quede en una línea distinta
        }
        return descripcion;
    }

    cantidad(): number {                    //cuántos empleados tiene
     return this._empleados.length;
    }
}