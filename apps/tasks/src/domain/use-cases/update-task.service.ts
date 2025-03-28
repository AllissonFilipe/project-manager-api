import { Injectable } from '@nestjs/common';
import { ITask } from '../interfaces/task.interface';
import { TasksRepositoryService } from '../../infrastructure/repositories/tasks.repository.service';
import { UpdateTaskDto } from '../../gateways/controllers/dtos/update-task.dto';

@Injectable()
export class UpdateTaskService {
  constructor(private readonly tasksRepository: TasksRepositoryService) {}

  async execute(task: UpdateTaskDto, userId: number): Promise<ITask> {
    await this.tasksRepository.updateById(task);
    const taskData = await this.tasksRepository.findById(task.id);

    return taskData;
  }
}
