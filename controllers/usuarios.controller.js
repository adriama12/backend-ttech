import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getAll = async (req, res) => {
  try {
    const usuarios = await prisma.usuarios.findMany();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getById = async (req, res) => {
  try {
    const usuario = await prisma.usuarios.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const nuevoUsuario = await prisma.usuarios.create({
      data: {
        Name: req.body.Name,
        Email: req.body.Email,
        Cntrasena: req.body.Cntrasena,
        Fecha_Creacion: new Date(),
      },
    });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const usuarioActualizado = await prisma.usuarios.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(usuarioActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteUsuario = async (req, res) => {
  try {
    const usuarioEliminado = await prisma.usuarios.delete({
      where: { id: Number(req.params.id) },
    });
    res.json(usuarioEliminado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
