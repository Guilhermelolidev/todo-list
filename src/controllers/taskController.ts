import { Request, Response } from 'express'
import * as userService from '../services/taskService'

export const getTasks = async (req: Request, res: Response) => {
    const tasks = await userService.getList()
    res.json(tasks)
}

export const createTask = async (req: Request, res: Response) => {
    await userService.create(req.body)
    res.send('Task criada')
}

export const removeTask = async (req: Request, res: Response) => {
    await userService.remove(req.params.id)
    res.send('Task removida')
}


