export class API {
    static apiUrl = '';
    static headers = new Headers({
        'Content-Type': 'application/json'
    })

    static post(endpoint: string, body: string) {
        return fetch(`${API.apiUrl}/${endpoint}`, {
            method: 'POST',
            headers: API.headers,
            body
        })
    }
}