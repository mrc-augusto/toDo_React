import { TASKS_STORAGE_KEY, TaskState, type Task } from "@/models/task";
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

  function prepareTask() {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: "",
        state: TaskState.Creating,
      },
    ]);
  }

  return {
    prepareTask,
  };
}
