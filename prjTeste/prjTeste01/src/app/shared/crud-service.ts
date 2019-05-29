import { HttpClient } from "@angular/common/http";
import { delay ,tap, take } from "rxjs/operators";

export class CrudService<T> {
    constructor(public http:HttpClient, private API_URL){}
    listar(){
        return this.http.get<T[]>(this.API_URL)
        .pipe();
    }

    loadById(id){
        return this.http.get<T[]>(`${this.API_URL}/${id}`).pipe(take(1));
    }

    private create(record: T){
        return this.http.post<T>(this.API_URL,record).pipe(take(1));    
    }

    private update(record: T){
        return this.http.put<T>(`${this.API_URL}/${record['id']}`, record).pipe(take(1));
    }

    save(record: T){
        if(record['id']){
            return this.update(record);
        }
        return this.create(record);
    }

    remove(id){
        return this.http.delete<T[]>(`${this.API_URL}/${id}`).pipe(take(1));
    }
}
