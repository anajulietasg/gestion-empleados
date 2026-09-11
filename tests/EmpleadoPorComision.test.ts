import { describe, expect, test } from "vitest";
import { EmpleadoPorComision } from "../src/EmpleadoPorComision";

describe("EmpleadoPorComision", () => {
  test("se puede crear un empleado por comision", () => {
    const emp = new EmpleadoPorComision("Juana", 100, 1000, 50, 50000);
    expect(emp).not.toBeNull();
  });

  test("el sueldo es su sueldo base más comision", () => {
    const emp = new EmpleadoPorComision("Juana", 100, 1000, 50, 50000);
    expect(emp.calcularSueldo()).toBe(100000);
  });

  test("hereda bien el nombre del empleado", () => {
    const emp = new EmpleadoPorComision("Juana", 100, 1000, 50, 50000);
    expect(emp.nombre).toBe("Juana");
  });

  test("un sueldo base negativo se guarda como 0", () => {
    const emp = new EmpleadoPorComision("Martina", 100, -5000, 50, 50000);
    expect(emp.calcularSueldo()).toBe(50000);
  });

  test("un valor de comisión negativo se guarda como 0", () => {
    const emp = new EmpleadoPorComision("Martina", 100, -5000, 50, 50000);
    expect(emp.calcularSueldo()).toBe(50000);
  });

  test("unas ventas negativas se guardan como 0", () => {
    const emp = new EmpleadoPorComision("Martina", 100, 1000, -50, 50000);
    expect(emp.calcularSueldo()).toBe(50000);
  });
});