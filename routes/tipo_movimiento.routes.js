import express from 'express';
import {
  getAll,
  getById,
  create,
  update,
  deleteTipo,
} from '../controllers/tipo_movimiento.controller.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteTipo);

export default router;
