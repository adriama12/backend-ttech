import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAll = async (req, res) => {
  try {
    const movimientos = await prisma.movimientos.findMany({
      include: {
        Concepto: true,
        Metodo_Pago: true,
        Tipo_Movimiento: true,
        Usuarios: true,
      },
    });
    res.json(movimientos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const movimiento = await prisma.movimientos.findUnique({
      where: { id: Number(req.params.id) },
      include: {
        Concepto: true,
        Metodo_Pago: true,
        Tipo_Movimiento: true,
        Usuarios: true,
      },
    });
    if (!movimiento) return res.status(404).json({ error: 'Movimiento no encontrado' });
    res.json(movimiento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const nuevoMovimiento = await prisma.movimientos.create({
      data: req.body,
    });
    res.status(201).json(nuevoMovimiento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const movimientoActualizado = await prisma.movimientos.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(movimientoActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteMovimiento = async (req, res) => {
  try {
    const movimientoEliminado = await prisma.movimientos.delete({
      where: { id: Number(req.params.id) },
    });
    res.json(movimientoEliminado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
