import { IsNumber } from "class-validator";

export class UpdateTaskDto  {
    @IsNumber()
    listId: number;
    @IsNumber()
    taskId: number;

    title?: string;
    description?: string;
    completed?: boolean;
}
