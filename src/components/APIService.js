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
    static InsertTask(body){
      fetch ('http://127.0.0.1:5000/add', {
        'method': 'POST',
        headers: {
          'Content-type': 'application/json'

        },
        body: JSON.stringify(body)
      })
      .then(res => res.json())

    }

    static DeleteTask(id){
      fetch (`http://127.0.0.1:5000/delete/${id}`, {
        'method': 'Delete',
        headers: {
          'Content-type' : 'application/json'

        },
        


      })
      .then(res => res.json())

    }
}