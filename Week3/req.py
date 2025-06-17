import requests

response = requests.get("https://jsonplaceholder.typicode.com/posts")
if response.status_code == 200:
    data = response.json()
    titles = []
    for datum in data:
        titles.append(datum["title"])
    for title in titles:
        print(title)
else:
    print("Error:", response.status_code)