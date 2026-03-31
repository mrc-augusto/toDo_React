import { ButtonIcon } from "@/components/buttton-icon";
import { Card } from "@/components/card";
import { InputCheckbox } from "@/components/input-checkbox";
import { Text } from "@/components/text";
import TrashIcon from "@/assets/icons/trash.svg?react";
import PencilIcon from "@/assets/icons/pencil.svg?react";
import CheckIcon from "@/assets/icons/check.svg?react";
import XIcon from "@/assets/icons/x.svg?react";
import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { InputText } from "@/components/input-text";
import { TaskState, type Task } from "@/models/task";
import { cx } from "class-variance-authority";
import { useTask } from "@/hooks/use-task";

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(
    task?.state === TaskState.Creating,
  );

  const [taskTitle, setTaskTitle] = useState("");
  const { updateTask, updateTaskStatus, deleteTask } = useTask();

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleCancelEditTask() {
    if(task.state === TaskState.Creating){
      deleteTask(task.id)
    }
    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "");
  }

  function handleSaveTask(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    updateTask(task.id, { title: taskTitle });
    setIsEditing(false);
  }

  function handleUpdateTaskStatus(e: ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;
    updateTaskStatus(task.id, checked);
  }

  function handleDeleteTask() {
    deleteTask(task.id);
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            checked={task?.concluded}
            onChange={handleUpdateTaskStatus}
          />
          <Text
            className={cx("flex-1", {
              "line-through": task?.concluded,
            })}
          >
            {task?.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              onClick={handleDeleteTask}
              icon={TrashIcon}
              variant="tertiary"
            />
            <ButtonIcon
              type="button"
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEditTask}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText
            value={taskTitle}
            className="flex-1"
            onChange={handleChangeTaskTitle}
            required
            autoFocus
          />
          <ButtonIcon
            type="button"
            icon={XIcon}
            variant="secondary"
            onClick={handleCancelEditTask}
          />
          <ButtonIcon type="submit" icon={CheckIcon} variant="primary" />
        </form>
      )}
    </Card>
  );
}
