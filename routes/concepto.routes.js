import express from 'express';
import {
  getAll,
  getById,
  create,
  update,
  deleteConcepto,
} from '../controllers/concepto.controller.js';

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteConcepto);

export default router;
