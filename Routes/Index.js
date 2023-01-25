import { Router } from 'express';
import itemRoutes from './Item.js';

const router = Router();

router.get("/", (req, res) => {
  res.send("this is the api root");
});

router.use("/items", itemRoutes);

export default router;