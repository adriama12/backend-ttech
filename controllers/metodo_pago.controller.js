import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAll = async (req, res) => {
  try {
    const metodos = await prisma.metodo_Pago.findMany();
    res.json(metodos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const metodo = await prisma.metodo_Pago.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!metodo) return res.status(404).json({ error: 'Método no encontrado' });
    res.json(metodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const nuevoMetodo = await prisma.metodo_Pago.create({
      data: { Metodo: req.body.Metodo },
    });
    res.status(201).json(nuevoMetodo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const metodoActualizado = await prisma.metodo_Pago.update({
      where: { id: Number(req.params.id) },
      data: { Metodo: req.body.Metodo },
    });
    res.json(metodoActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteMetodo = async (req, res) => {
  try {
    const metodoEliminado = await prisma.metodo_Pago.delete({
      where: { id: Number(req.params.id) },
    });
    res.json(metodoEliminado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
