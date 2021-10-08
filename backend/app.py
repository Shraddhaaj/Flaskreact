from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask.json import jsonify
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS






app = Flask(__name__)
CORS(app)


app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Shraddha123@localhost:5432/library'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)
print(db,"CONNECTION ESTABLISHED----")
ma = Marshmallow(app)



class Todo(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    task = db.Column(db.String(100))
    description = db.Column(db.Text())
    date = db.Column(db.DateTime, default = datetime.datetime.now)

    def __init__(self, task, description):
        self.task = task
        self.description = description

class TodoSchema(ma.Schema):
    class Meta:
        fields = ('íd','task','description','date')

todo_schema = TodoSchema()
todo_schemas = TodoSchema(many=True)



@app.route('/get/<id>', methods = ['GET'])
def get_task(id):
    all_tasks = Todo.query.all(id)
    result = todo_schemas.dump(all_tasks)
    return jsonify(result)


@app.route('/add', methods = ['POST'])
def add_task():
    task = request.json['task']
    description = request.json['description']

@app.route('/update/<int:id>', methods= ['PUT'])
def update_task(id):
    todo = Todo.query.get(id)
    task = request.json['task'] #storing
    description = request.json['description']
    todo.task = task # assigning the updated value to the record / to tha task with particular Id
    todo.description = description
    db.session.commit()
    return todo_schema.jsonify(todo)    

@app.route('/delete/<int:id>', methods = ['DELETE'])
def delete(id):
    deletetodo = Todo.query.get(id)
    db.session.delete(deletetodo)
    db.session.commit()
    return todo_schema.jsonify(deletetodo)

    




    todos = Todo(task, description)
    db.session.add(todos)
    print(db.session, "todo done")
    db.create_all()
    db.session.commit()
    return todo_schema.jsonify(todos)





if __name__ == "__main__":
    app.run(debug=True)