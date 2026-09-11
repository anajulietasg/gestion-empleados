import { describe, expect, test } from "vitest";
import { EmpleadoPorComision } from "../src/EmpleadoPorComision";
import { EmpleadoMensual } from "../src/EmpleadoMensual";
import { EmpleadoPorHora } from "../src/EmpleadoPorHora";
import { Empresa } from "../src/Empresa";

describe("Empresa", () => {
    test("una empresa nueva comienza vacia", () => {
        const empresa = new Empresa();
        expect(empresa.cantidad()).toBe(0);
    });

    test("se puede contratar un empleado y la cantidad aumenta", () => {
        const empresa = new Empresa();
        const emp = new EmpleadoMensual("Juan", 100, 50000);
        empresa.contratar(emp);
        expect(empresa.cantidad()).toBe(1);
    });

    test("cuenta bien la cantidad de empelados", () => {
        const empresa = new Empresa();
        empresa.contratar(new EmpleadoMensual("Juan", 100, 50000));
        empresa.contratar(new EmpleadoPorHora("Juana", 101, 1000, 40));
        empresa.contratar(new EmpleadoPorComision("Pedro", 102, 500, 20, 20000));
        expect(empresa.cantidad()).toBe(3);
    });

    test("calcula bien el total de sueldos a pagar", () => {
        const empresa = new Empresa();
        empresa.contratar(new EmpleadoMensual("Juan", 100, 50000));
        empresa.contratar(new EmpleadoPorHora("Juana", 101, 1000, 40));
        empresa.contratar(new EmpleadoPorComision("Pedro", 102, 500, 20, 20000));
        expect(empresa.totalSueldos()).toBe(50000 + (1000 * 40) + (20000 + (500 * 20)));
    });
});