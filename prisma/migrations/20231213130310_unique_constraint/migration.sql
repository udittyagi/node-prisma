/*
  Warnings:

  - A unique constraint covering the columns `[id,belongsToId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,userId]` on the table `Update` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,updateId]` on the table `UpdatePoint` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Product_id_belongsToId_key" ON "Product"("id", "belongsToId");

-- CreateIndex
CREATE UNIQUE INDEX "Update_id_userId_key" ON "Update"("id", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "UpdatePoint_id_updateId_key" ON "UpdatePoint"("id", "updateId");
