import { TaskStatus } from '../task.modul';

export class GetTasksFilterDTO {
  status?: TaskStatus;
  search?: string;
}
