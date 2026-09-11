import { describe, test, expect } from "vitest"
import { EmpleadoPorHora } from "../src/EmpleadoPorHora"

describe("EmpleadoPorHora", () => {
    test("se puede crear un empleado por hora", () => {
        const emp = new EmpleadoPorHora("Juan", 100, 1000, 10);
        expect(emp).not.toBeNull();
    });

    test("el sueldo es valorHora por horasTrabajadas", () => {
        const emp = new EmpleadoPorHora("Juan", 200, 160, 500);
        expect(emp.calcularSueldo()).toBe(80000);          //160 horas × 500 = 80000
    });

    test("hereda bien el nombre del empleado", () => {
        const emp = new EmpleadoPorHora("Juan", 100, 1000, 10);
        expect(emp.nombre).toBe("Juan");
    });

    test("horas negativas se guardan como 0", () => {
        const emp = new EmpleadoPorHora("Martina", 100, -50, 500);   //horas negativas
        expect(emp.calcularSueldo()).toBe(0);
    });

    test("valor de hora negativo se guarda como 0", () => {
        const emp = new EmpleadoPorHora("Martina", 100, 160, -500);  //valor hora negativo
        expect(emp.calcularSueldo()).toBe(0);
    });

    test("el neto funciona para distintos tipos de empleado", () => {
        const emp = new EmpleadoPorHora("Juan", 101, 100, 1000);      //bruto 100000 (100 horas × 1000), neto = 86000
        expect(emp.sueldoNeto()).toBe(86000);           
    });
});
