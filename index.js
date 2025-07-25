import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import conceptoRoutes from './routes/concepto.routes.js';
import metodoPagoRoutes from './routes/metodo_pago.routes.js';
import tipoMovimientoRoutes from './routes/tipo_movimiento.routes.js';
import usuariosRoutes from './routes/usuarios.routes.js';
import movimientosRoutes from './routes/movimientos.routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Montar rutas
app.use('/api/conceptos', conceptoRoutes);
app.use('/api/metodos_pago', metodoPagoRoutes);
app.use('/api/tipos_movimiento', tipoMovimientoRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/movimientos', movimientosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
// Comentario para commit de prueba
