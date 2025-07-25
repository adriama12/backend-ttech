import express from 'express';
import {
  getAll,
  getById,
  create,
  update,
  deleteMetodo,
} from '../controllers/metodo_pago.controller.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteMetodo);

export default router;
