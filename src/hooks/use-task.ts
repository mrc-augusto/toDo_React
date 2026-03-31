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

  function updateTask(id: string, payload: { title: Task["title"] }) {
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

  return {
    prepareTask,
    updateTaskStatus,
    updateTask,
  };
}
