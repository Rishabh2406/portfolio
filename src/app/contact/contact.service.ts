// import { HttpClient } from "@angular/common/http";

// export class ContactService{

//     constructor(private http: HttpClient){};
//     addQuery(id: string, name:string, email:string, number: string, query: string){


//         const postData = new FormData();
//         postData.append('name', name);
//         postData.append('email', email);
//         postData.append('number', number);
//         postData.append('query', query);

//         this.http.post<{message: string;}>(
//             'http://localhost:3000/contact',
//             postData
//         )
//     }
// }