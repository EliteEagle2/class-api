import { Router } from 'express';

const router = Router();

router.get("/", (req, res) => {
  res.send("Guido!");
});

export default router;