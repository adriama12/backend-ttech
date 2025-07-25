-- CreateTable
CREATE TABLE "Concepto" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,

    CONSTRAINT "Concepto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Metodo_Pago" (
    "id" SERIAL NOT NULL,
    "Metodo" TEXT NOT NULL,

    CONSTRAINT "Metodo_Pago_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tipo_Movimiento" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,

    CONSTRAINT "Tipo_Movimiento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Cntrasena" TEXT NOT NULL,
    "Fecha_Creacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movimientos" (
    "id" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Fecha" TIMESTAMP(3) NOT NULL,
    "Descripcion" TEXT NOT NULL,
    "Valor" INTEGER NOT NULL,
    "conceptoId" INTEGER,
    "metodo_PagoId" INTEGER,
    "tipo_MovimientoId" INTEGER,
    "usuariosId" INTEGER,

    CONSTRAINT "Movimientos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_Email_key" ON "Usuarios"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_Cntrasena_key" ON "Usuarios"("Cntrasena");

-- AddForeignKey
ALTER TABLE "Movimientos" ADD CONSTRAINT "Movimientos_conceptoId_fkey" FOREIGN KEY ("conceptoId") REFERENCES "Concepto"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movimientos" ADD CONSTRAINT "Movimientos_metodo_PagoId_fkey" FOREIGN KEY ("metodo_PagoId") REFERENCES "Metodo_Pago"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movimientos" ADD CONSTRAINT "Movimientos_tipo_MovimientoId_fkey" FOREIGN KEY ("tipo_MovimientoId") REFERENCES "Tipo_Movimiento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movimientos" ADD CONSTRAINT "Movimientos_usuariosId_fkey" FOREIGN KEY ("usuariosId") REFERENCES "Usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;
