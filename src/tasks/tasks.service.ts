import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { TasksRepository } from './tasks.repository';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(private taskRepository: TasksRepository) {}
  // get Tasks
  async getTasks(filterDTO: GetTasksFilterDTO): Promise<Task[]> {
    return this.taskRepository.getTasks(filterDTO);
  }
  // get a task by Id
  async getTaskById(id: string): Promise<Task> {
    const found = await this.taskRepository.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException(`Task ID "${id}" not found`);
    }
    return found;
  }

  // create a Task
  async createTask(createTaskDTO: any): Promise<Task> {
    return this.taskRepository.createTask(createTaskDTO);
  }

  // delete Task
  async deleteTask(id: string): Promise<void> {
    const result = await this.taskRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task ID "${id}" not found`);
    }
  }

  //update task status
  async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id);
    task.status = status;
    await this.taskRepository.save(task);
    return task;
  }
}
