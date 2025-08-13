    import requests

try:
    response = requests.get("https://example.com")
    response.raise_for_status()
    data = response.json()
except requests.exceptions.RequestException as e:
    print("Network Error:", e)
except ValueError:
    print("Error: The response is not valid JSON.")
    
