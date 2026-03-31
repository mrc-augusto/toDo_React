import { delay } from "@/helpers/utils";
import { TASKS_STORAGE_KEY, TaskState, type Task } from "@/models/task";
import { useEffect, useState } from "react";
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

export function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASKS_STORAGE_KEY, []);
  const [tasks, setTasks] = useState<Task[]>([])
  const[isLoadingTasks, setIsLoadingTasks] = useState(true)

  async function fetchTasks(){
    if(isLoadingTasks){
      await delay(2000)
    }

    setIsLoadingTasks(false)
    setTasks(tasksData)
  }

  useEffect(() => {
    fetchTasks()
  }, [tasksData])

  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    isLoadingTasks
  };
}
