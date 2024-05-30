import {
  Body,
  Controller,
  Get,
  Delete,
  Param,
  Post,
  Patch,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDTO } from './dto/update-task-status.dto';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  //this line is kind of a injection.
  constructor(private tasksService: TasksService) {}

  //  get all Task data
  @Get()
  getTasks(@Query() filterDTO: GetTasksFilterDTO): Promise<Task[]> {
    return this.tasksService.getTasks(filterDTO);
  }

  // Get a task
  @Get(':id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  // creating task
  @Post()
  createTask(@Body() createTaskDTO: CreateTaskDTO): Promise<Task> {
    return this.tasksService.createTask(createTaskDTO);
  }

  // Deleting a task
  @Delete(':id')
  deleteTaskById(@Param('id') id: string): Promise<void> {
    return this.tasksService.deleteTask(id);
  }

  // Update task-status
  @Patch(':id')
  updateTaskStatus(
    @Body() updateTaskStatusDTO: UpdateTaskStatusDTO,
    @Param('id') id: string,
  ): Promise<Task> {
    const { status } = updateTaskStatusDTO;
    return this.tasksService.updateTaskStatus(id, status);
  }
}
