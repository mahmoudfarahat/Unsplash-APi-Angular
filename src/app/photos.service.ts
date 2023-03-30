import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs';

interface photo{
urls:{
  regular:string
}

}
@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http:HttpClient) { }

getPhoto(){
//   let headers = new HttpHeaders();
// headers = headers.set('Authorization', 'Client-ID Bb7wP9tKVK2aG3tSiTaz64ZwGjFG4LLTfsgXc8qFhGg');
  return this.http.get<photo>('https://api.unsplash.com/photos/random', {
      headers:{
        Authorization:'Client-ID Bb7wP9tKVK2aG3tSiTaz64ZwGjFG4LLTfsgXc8qFhGg'
      }
}).pipe(
    pluck('urls','regular')

)
}


}
