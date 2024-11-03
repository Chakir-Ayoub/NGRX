export interface ContactModels{
  id?:number;
  name:string;
  phone:string;
  active:boolean;
}

export interface ContactState{
  contacts:ContactModels[];
}
