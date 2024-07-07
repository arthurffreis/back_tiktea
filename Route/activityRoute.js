import express from 'express';
import requireAuth from '../Middleware/requireAuth.js';
import { addActivity, getAllActivities, getActivityById, updateActivity, deleteActivity, getActivitiesByDay} from '../controllers/activityController.js';

const router = express.Router();

// Rota para adicionar uma nova atividade
router.post("/", requireAuth, addActivity);

// Rota para obter todas as atividades
router.get("/", requireAuth, getAllActivities);

// Rota para obter uma atividade específica pelo ID
router.get("/:id", requireAuth, getActivityById);

// Rota para atualizar uma atividade específica pelo ID
router.put("/:id", requireAuth, updateActivity);

// Rota para deletar uma atividade específica pelo ID
router.delete("/:id", requireAuth, deleteActivity);

router.get("/day/:day", requireAuth, getActivitiesByDay);

export default router;
