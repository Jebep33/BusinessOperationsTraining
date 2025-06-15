import json

person = {
    "name": "Alice",
    "age": 30,
    "isStudent": False
}

json_string = json.dumps(person)
print(json_string)
print(json.loads(json_string))
