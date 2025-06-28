import json
#contacts = [
#    {
#        "name": "Jerome",
#        "countryCode": "+63",
#        "phoneNumber": "953-578-6333"
#    },
#    {
#        "name": "Ethan",
#        "countryCode": "+63",
#        "phoneNumber": "995-911-7924"
#    }
#]
#
#json_string = json.dumps(contacts)
#print(json_string)
#print(json.loads(json_string))
#phoneNumbers = []
#for contact in contacts:
#    phoneNumbers.append(contact["phoneNumber"])

#print(phoneNumbers)

file = open("contacts.json",'r')
contacts = file.read()
print(contacts)
print(json.loads(contacts))
file.close()