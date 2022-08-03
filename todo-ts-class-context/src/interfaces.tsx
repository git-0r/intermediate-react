export interface todoState {
  todos: {
    id: string;
    data: {
      content: string;
      completed: boolean;
    };
  }[];
}

export interface contextData {
  data: {
    todos: {
      data: {
        content: string;
        completed: boolean;
      };
      id: string;
    }[];
  };
  addTodo: (todo: todo) => void;
}

export interface todo {
  data: {
    content: string;
    completed: boolean;
  };
  id: string;
}
