interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = { [U in K]: T[U] };

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
