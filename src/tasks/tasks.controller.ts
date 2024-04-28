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
import { Task, TaskStatus } from './task.modul';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';

@Controller('tasks')
export class TasksController {
  //this line is kind of a injection.
  constructor(private tasksService: TasksService) {}

  //  get all Task data
  @Get()
  getTasks(@Query() filterDTO: GetTasksFilterDTO): Task[] {
    // if we have anyilters defined, call tasksService.getTasksWithFilters
    // otherwise, just get all tasks
    if (Object.keys(filterDTO).length) {
      return this.tasksService.getTasksWithFilters(filterDTO);
    }
    return this.tasksService.getAllTasks();
  }

  // Get a task
  @Get(':id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  // creating task
  @Post()
  createTask(@Body() createTaskDTO: CreateTaskDTO) {
    // console.log('body: ', description);
    return this.tasksService.createTask(createTaskDTO);
  }

  // Deleting a task
  @Delete(':id')
  deleteTaskById(@Param('id') id: string): void {
    this.tasksService.deleteTask(id);
  }

  @Patch(':id')
  updateTaskStatus(
    @Body('status') status: TaskStatus,
    @Param('id') id: string,
  ): Task {
    return this.tasksService.updateTaskStatus(id, status);
  }
}
