import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiUtil {

    constructor(private http: HttpClient){}
    
    private baseUrl = 'https://tworks-exercise-api.herokuapp.com';

    /**
	 * Use to get the list of objects based on specified criteria.
	 */
	getAll(endpoint: any): Observable<any> {
		let fullURL = this.baseUrl + endpoint;

        return this.http.get(fullURL);
	}
    
	addEntry(endpoint: string, data: any): Observable<any> {
		const fullURL = this.baseUrl + endpoint;

        return this.http.post(fullURL, data, {});
	}

    deleteEntry(endpoint: any, id: any): Observable<any> {
		const fullURL = this.baseUrl + endpoint + '/' + id;
		return this.http.delete(fullURL, {})
	}

}