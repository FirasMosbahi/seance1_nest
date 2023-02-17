export enum TodoStatusEnum {
  'actif' = 'En cours',
  'waiting' = 'En attente',
  'done' = 'Finalisé',
}
export class Todo {
  id: string;
  name: string;
  description: string;
  dateDeCreation: Date;
  status: TodoStatusEnum;
  constructor(
    id: string,
    name: string,
    description: string,
    creationDate: Date,
    status: TodoStatusEnum,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.dateDeCreation = creationDate;
    this.status = status;
  }
}
