#!/usr/bin/python3
a=5
b=4
if b>a:
    print("b>a")
elif a==b:
    print("a==b")
else:
    print("a>b")


ajd=["red","big","tasty"]
fruits=["apple","banana","cherry"]
for  x in ajd:
    for y in fruits:
        print(x,y)

i=1
while  i<6:
    print(i)
    if i==3:
        break;
    i+=1
