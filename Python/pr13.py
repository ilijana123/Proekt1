file = open("demo4", "r")
j = (i.split("\t") for i in file) 
for x in j:
    print(x)