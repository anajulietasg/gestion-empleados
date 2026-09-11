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
});
