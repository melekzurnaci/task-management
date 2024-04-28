import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.modul';

export class UpdateTaskStatusDTO {
  @IsEnum(TaskStatus)
  status;
}
