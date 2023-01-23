import { Router } from "express";
import * as controllers from "../Controllers/Day.js";

const router = Router();

router.get("/", controllers.getDays);
router.get("/:id", controllers.getDay);
router.post("/", controllers.createDay);
router.put("/:id", controllers.updateDay);
router.delete("/:id", controllers.deleteDay);

export default router;