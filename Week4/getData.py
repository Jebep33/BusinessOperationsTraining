import json

def callUser(jsonData,zipcode_prefix):
    areas = []
    
    for user in jsonData["users"]:
        if not user["address"]:
            continue
        elif user["address"]["zipcode"].startswith(zipcode_prefix):
            areas.append(user["name"])
    if not areas:
        raise ValueError("No users found with the given zipcode.")
    return areas

try:
    with open("data.json",'r',encoding = 'utf-8') as file: 
        data = json.load(file)

    areaUsers = callUser(data,"333")
    print(areaUsers)

except ValueError as e:
    print(e)
