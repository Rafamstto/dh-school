const { Router } = require("express");
const router = Router();
const AlunoController = require("../controllers/AlunoController.js");

router.get("/", AlunoController.index);
router.get("/create", AlunoController.create);
router.post("/create", AlunoController.store);
router.get("/:id/edit", AlunoController.edit);
router.delete("/:id/delete", AlunoController.destroy);

module.exports = router;