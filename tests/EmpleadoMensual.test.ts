import { describe, expect, test } from "vitest";
import { EmpleadoMensual } from "../src/EmpleadoMensual";

describe("EmpleadoMensual", () => {
  test("se puede crear un empleado mensual", () => {
    const emp = new EmpleadoMensual("Juana", 100, 50000);
    expect(emp).not.toBeNull();
  });

  test("el sueldo de un empleado mensual es su sueldo fijo", () => {
    const emp = new EmpleadoMensual("Juana", 100, 50000);
    expect(emp.calcularSueldo()).toBe(50000);
  });

  test("hereda bien el nombre del empleado", () => {
    const emp = new EmpleadoMensual("Juana", 100, 50000);
    expect(emp.nombre).toBe("Juana");
  });

  test("un sueldo negativo se guarda como 0", () => {
    const emp = new EmpleadoMensual("Martina", 100, -5000);
    expect(emp.calcularSueldo()).toBe(0);
  });
});