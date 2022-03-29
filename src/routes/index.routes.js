import { Router } from 'express';
const router = Router();

//routes
router.get('/', (req,res) => 
    res.send('bienvenido a mi API')
);

export default router;