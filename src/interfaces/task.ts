import { Document } from "mongoose";

export interface ITask extends Document {
    title: string;
    description: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    completedAt?: Date;
    priority: string;
}