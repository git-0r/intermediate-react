export interface todo {
  id: string;
  data: {
    content: string;
    completed: boolean;
  };
}

export interface hookInterface {
  todos: [];
    setTodos: (prev: any)=> void
}
