import { TASKS_STORAGE_KEY, type Task } from "@/models/task";
import useLocalStorage from "use-local-storage";

export function useTasks(){
  const[tasks ] = useLocalStorage<Task[]>(TASKS_STORAGE_KEY, [])
  
  return {
    tasks,
    tasksCount: tasks.length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length
  }

}