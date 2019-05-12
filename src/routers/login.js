import { Router } from 'express';

const router = new Router();

router.get('/user/login', async (req, res) => {
  return res.json({
    description: 'User logged in successfully.',
  });
});

export default router;

