#!/user/bin/python3
dict1={
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
    }
print(dict1)

dict2=dict(name="John",age=36,country="Norway")
print(dict2)

print(dict1["brand"])
x=dict1.get("model")
print(x)

dict3={
    "brand":"Ford",
    "electric":False,
    "year":1964,
    "colors":["red","white","blue"]
}
x=dict3.keys()
print(x)
y=dict3.values()
print(y)
z=dict3.items()
print(z)

if "brand"  in dict3:
    print("YES")

dict3["year"]=2018
print(dict3)
dict3.update({"year":"2020"})
print(dict3)

dict3["colors"]="green"
print(dict3)

dict3.pop("brand")
print(dict3)
dict3.popitem()
print(dict3)
del dict3["year"]
print(dict3)
dict3.clear()

dict4={
    "brand":"Ford",
    "electric":False,
    "year":1964,
    "colors":["red","white","blue"]
}
for x in dict4:
    print(x)
print(dict4[x])

mydict=dict4.copy()
print(mydict)
myfamily = {
  "child1" : {
    "name" : "Emil",
    "year" : 2004
  },
  "child2" : {
    "name" : "Tobias",
    "year" : 2007
  },
  "child3" : {
    "name" : "Linus",
    "year" : 2011
  }
}
print(myfamily["child2"]["name"])