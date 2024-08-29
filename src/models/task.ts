import { Schema, model } from 'mongoose';
import { ITask } from '../interfaces/task';

const taskSchema = new Schema<ITask>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, enum: ['pendente', 'em andamento', 'concluída', 'atrasada'], default: 'pendente' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    completedAt: { type: Date },
    priority: { type: String, enum: ['alta', 'média', 'baixa'], default: 'média' },
});

export const Task = model('Task', taskSchema);