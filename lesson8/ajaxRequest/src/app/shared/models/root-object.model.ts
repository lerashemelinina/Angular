import { PersonInfo } from "./person-info.models";

export interface RootObject{
    page:number,
    per_page:number,
    total:number,
    total_pages:number,
    data:PersonInfo[]
}