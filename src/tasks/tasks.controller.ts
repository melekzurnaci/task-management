import {
  Body,
  Controller,
  Get,
  Delete,
  Param,
  Post,
  Patch,
  Query,
  UseFilters,
  NotFoundException,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDTO } from './dto/create-task.dto';
import { GetTasksFilterDTO } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDTO } from './dto/update-task-status.dto';

@Controller('tasks')
export class TasksController {
  /*
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
    // try to get task id is 'xxxxslkşlş'
    const task = this.tasksService.getTaskById(id);
    //if not found the task, throw the error (404 not found) -> it's a standart error.
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found...`);
    }

    return task;
    // otherwise return found the task.
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
    this.getTaskById(id);
    this.tasksService.deleteTask(id);
  }

  @Patch(':id')
  updateTaskStatus(
    @Body() updateTaskStatusDTO: UpdateTaskStatusDTO,
    @Param('id') id: string,
  ): Task {
    const { status } = updateTaskStatusDTO;
    return this.tasksService.updateTaskStatus(id, status);
  } */
}
