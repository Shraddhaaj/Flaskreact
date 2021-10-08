export default class APIService {
    static UpdateTask(id, body) {
        fetch(`http://127.0.0.1:5000/update/${id}`, {
      'method':'PUT',
      headers: {
        'Çontent-type':'ápplication/json'
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
 
 
    }
}