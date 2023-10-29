#!/usr/bin/python3
mylist=["apple","banana","cherry"]
print(type(mylist))
thislist=list(("apple","banana","cherry"))
print(thislist[1])
print(thislist[-1])
print(thislist[2:5])
print(thislist[:4])
print(thislist[-4:-1])
if "apple" in thislist:
    print("Yes, 'apple' is in the fruits list")

tlist=["apple","banana","cherry","orange","kiwi","mango"]
tlist[1:3]=["blackcurrant","watermelon"]
print(tlist)
tlist.append("orange")
print(tlist)
tlist.insert(1,"orange")
print(tlist)

ttlist=["apple","banana","cherry"]
tropical=["mango","pineapple","papaya"]
ttlist.extend(tropical)
print(ttlist)

ttlist.remove("banana")
print(ttlist)
ttlist.pop(1)
print(ttlist)
ttlist.pop()
print(ttlist)
del ttlist[0]
print(ttlist)
del ttlist

pom=["apple","banana","cherry"]
pom.clear()
pom.insert(0,"cherry")
print(pom)