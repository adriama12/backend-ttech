import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAll = async (req, res) => {
  try {
    const conceptos = await prisma.concepto.findMany();
    res.json(conceptos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const concepto = await prisma.concepto.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!concepto) return res.status(404).json({ error: 'Concepto no encontrado' });
    res.json(concepto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const nuevoConcepto = await prisma.concepto.create({
      data: { Name: req.body.Name },
    });
    res.status(201).json(nuevoConcepto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const conceptoActualizado = await prisma.concepto.update({
      where: { id: Number(req.params.id) },
      data: { Name: req.body.Name },
    });
    res.json(conceptoActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteConcepto = async (req, res) => {
  try {
    const conceptoEliminado = await prisma.concepto.delete({
      where: { id: Number(req.params.id) },
    });
    res.json(conceptoEliminado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
