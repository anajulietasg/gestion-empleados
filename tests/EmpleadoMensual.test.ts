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

  test("el sueldo neto resta los descuentos del bruto", () => {
    const emp = new EmpleadoMensual("Daniela", 100, 100000);       //bruto 100000, descuento 14% = 14000, neto = 86000
    expect(emp.sueldoNeto()).toBe(86000);
  });
});