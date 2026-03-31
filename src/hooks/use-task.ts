import { delay } from "@/helpers/utils";
import { TASKS_STORAGE_KEY, TaskState, type Task } from "@/models/task";
import { useState } from "react";
import useLocalStorageImport from "use-local-storage";

const useLocalStorage = ((
  useLocalStorageImport as unknown as {
    default?: {
      default?: typeof useLocalStorageImport;
    } & typeof useLocalStorageImport;
  }
).default?.default ??
  (
    useLocalStorageImport as unknown as {
      default?: typeof useLocalStorageImport;
    }
  ).default ??
  useLocalStorageImport) as typeof useLocalStorageImport;

export function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_STORAGE_KEY, []);
  const [isUpdatingTask, setIsUpdatingTask] = useState(false);
  const [isDeletingTask, setIsDeletingTask] = useState(false);

  function prepareTask() {
    setIsUpdatingTask(true)
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: "",
        state: TaskState.Creating,
      },
    ]);
    setIsUpdatingTask(false)
  }

  async function updateTask(id: string, payload: { title: Task["title"] }) {
    await delay(1000);
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, state: TaskState.Created, ...payload }
          : task,
      ),
    );
  }

  function updateTaskStatus(id: string, concluded: boolean) {
    setTasks(
      tasks.map((task) => 
        task.id === id 
          ? { ...task, concluded } 
          : task
        ),
    );
  }

  async function deleteTask (id: string){
    setIsDeletingTask(true)
    await delay(1000)

    setTasks(tasks.filter((task)=> task.id !== id))
    setIsDeletingTask(false)
  }

  return {
    prepareTask,
    updateTaskStatus,
    updateTask,
    deleteTask,
    isUpdatingTask,
    isDeletingTask
  };
}
