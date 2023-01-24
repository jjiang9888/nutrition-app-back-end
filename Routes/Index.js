import { Router } from 'express';
import itemRoutes from './Item.js';
import dayRoutes from './Day.js';

const router = Router();

router.get("/", (req, res) => {
  res.send("this is the api root");
});

router.use("/items", itemRoutes);
router.use("/days/:days/items", dayRoutes);

export default router;