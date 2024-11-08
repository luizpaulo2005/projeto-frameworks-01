import { buscarEvento, listarEvento, listarEventos } from "../controllers/evento.js";
import { Router } from "express";

const eventoRoute = Router();

eventoRoute.get("/", listarEventos);
eventoRoute.get("/:id/listar", listarEvento);
eventoRoute.get("/buscar", buscarEvento)

export { eventoRoute }