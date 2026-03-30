import { TaskItem } from "@/core-components/task-item";
import { TasksSummary } from "@/core-components/tasks-summary";
import { Container } from "@/components/container";

export function PageHome(){
  return (
    <>
      <Container as="article" className="space-y-3">
        <header className="flex items-center justify-between">
          <TasksSummary/>
        </header>
        <main>
          <TaskItem/>
        </main>
      </Container>
    </>
  )
}