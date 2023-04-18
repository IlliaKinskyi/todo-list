export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export type TodoType = {
    id: string;
    title: string;
    completed: boolean;
}

export interface TodoState {
    list: TodoType[];
    status: Status;
}