import { Router } from 'express';
import * as userController from '../controllers/taskController';

const router = Router();

router.get('/tasks', userController.getTasks);
router.post('/tasks', userController.createTask);
router.delete('/tasks/:id', userController.removeTask);

export default router;