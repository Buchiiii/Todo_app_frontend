export interface Tasks {
result: Task[];
  length: number;
}

export interface Task {
  id: string;
  name: string;
  checked: boolean;
}
