import { fakerPT_BR as faker } from "@faker-js/faker";
import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-br.js";

dayjs.locale(ptBR);

const eventos= [];

Array.from({ length: 20 }).forEach(() => {
  eventos.push({
    id: faker.string.uuid(),
    nome: faker.lorem.words(3),
    descricao: faker.lorem.paragraph(),
    data: dayjs(faker.date.future({ years: 1 })).format("DD/MM/YYYY"),
    local: faker.location.city(),
    endereco: faker.location.streetAddress(),
    cidade: faker.location.city(),
    estado: faker.location.state(),
    pais: faker.location.country(),
    cep: faker.location.zipCode(),
    criadoEm: dayjs(faker.date.past({ years: 1 })).format("DD/MM/YYYY"),
    atualizadoEm: dayjs(faker.date.recent({ days: 1 })).format("DD/MM/YYYY"),
  });
});

const listarEventos = async (req, res) => {
  return res.render("evento/listar", { eventos });
};

const listarEvento = async (req, res) => {
  const { id } = req.params;
  const evento = eventos.find((evento) => evento.id === id);
  return res.render("evento/visualizar", { evento });
};

const buscarEvento = async (req, res) => {
  const { nome } = req.query;
  const eventosFiltrados = eventos.filter((evento) =>
    evento.nome.includes(nome)
  );
  return res.render("evento/buscar", { eventos: eventosFiltrados, nome });
};

export { buscarEvento, listarEvento, listarEventos };
