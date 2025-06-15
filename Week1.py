def addNumber(mylist,input):
    if type(input) == int:
        mylist.append(input)
        return mylist
    else:
        print("Your input is not a number.")

def reverseString(string):
    if type(string) == str:
        print(string[::-1])
    else:
        print("Your input is not a string.")

def evenNumbers(mylist):
    even = list(filter(lambda x: x%2 == 0, mylist))
    return len(even)


mylist = [1,2,3,4,5]
myStr = "Hello World"

print(addNumber(mylist,10))
reverseString(myStr)
print(evenNumbers(mylist))