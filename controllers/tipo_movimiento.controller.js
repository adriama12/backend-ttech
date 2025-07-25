import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAll = async (req, res) => {
  try {
    const tipos = await prisma.tipo_Movimiento.findMany();
    res.json(tipos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const tipo = await prisma.tipo_Movimiento.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!tipo) return res.status(404).json({ error: 'Tipo no encontrado' });
    res.json(tipo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const nuevoTipo = await prisma.tipo_Movimiento.create({
      data: { Name: req.body.Name },
    });
    res.status(201).json(nuevoTipo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const tipoActualizado = await prisma.tipo_Movimiento.update({
      where: { id: Number(req.params.id) },
      data: { Name: req.body.Name },
    });
    res.json(tipoActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteTipo = async (req, res) => {
  try {
    const tipoEliminado = await prisma.tipo_Movimiento.delete({
      where: { id: Number(req.params.id) },
    });
    res.json(tipoEliminado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
