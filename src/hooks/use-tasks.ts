import { TASKS_STORAGE_KEY, type Task } from "@/models/task";
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
  const [tasks] = useLocalStorage<Task[]>(TASKS_STORAGE_KEY, []);

  return {
    tasks,
    tasksCount: tasks.length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
  };
}
