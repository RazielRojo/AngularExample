
type Nullable<T> = T | null;
export interface TaskData{
    taskType : number ;
    taskName : string; 
    taskInput : string; 
    taskPriority : Nullable<number> ;
    output : Nullable<string>; 
    failureReason : Nullable<string>; 
    status: string;
}