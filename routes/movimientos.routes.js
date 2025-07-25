import express from 'express';
import {
  getAll,
  getById,
  create,
  update,
  deleteMovimiento,
} from '../controllers/movimientos.controller.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteMovimiento);

export default router;
