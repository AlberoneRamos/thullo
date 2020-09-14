import User from './User';

export default class Task {
  constructor(
    title: string, 
    id: string = '', 
    tags: Array<string> = [], 
    description?: string, 
    picture?: string, 
    due?: number, 
    assignees: Array<User> = []
  ) {
    this.id = id;
    this.title = title;
    this.tags = tags;
    this.description = description;
    this.picture = picture;
    this.due = due;
    this.assignees = assignees;
  }
  
  readonly id: string;
  
  title: string;
  
  tags: Array<string>;
  
  description?: string;
  
  picture?: string;
  
  due?: number;
  
  assignees: Array<User>;
}
