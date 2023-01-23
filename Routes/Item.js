import { Router } from "express";
import * as controllers from "../Controllers/Item.js"

const router = Router();

router.get("/", controllers.getItems);
router.get("/:id", controllers.getItem);
router.post("/", controllers.createItem);
router.put("/:id", controllers.updateItem);
router.delete("/:id", controllers.deleteItem);

export default router;