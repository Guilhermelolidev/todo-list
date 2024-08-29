import { ITask } from "../interfaces/task";
import { Task } from "../models/task";

export const getList = async () => {
    return await Task.find()
}

export const create = async (taskData: ITask) => {
    const task = new Task(taskData)
    return await task.save()
}

export const remove = async (id: string) => {
    return await Task.findByIdAndDelete(id)
}