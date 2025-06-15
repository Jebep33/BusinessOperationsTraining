def addNumber(list,input):
    if type(input) == int:
        list.append(input)
    else:
        print("Your input is not a number.")

def reverseString(str):
    if type(str) == str:
        print(str[::-1])
    else:
        print("Your input is not a string.")

def evenNumbers(list):
    even = filter(lambda x: x%2 == 0, list)

mylist = [1,2,3,4,5]

addNumber(mylist,10)
print(mylist)