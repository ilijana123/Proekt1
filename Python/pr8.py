#!/usr/bin/python3
set={"apple","banana","cherry"}
print(set)

set1={"apple","banana","cherry",True,1,2}
print(set1)

for x in set1:
    print(x)

set.add("orange")
print(set)
tropical={"pineapple","mango","papaya"}
set.update(tropical)
print(set)
set.remove("banana")
print(set)
set.discard("cherry")
print(set)

set1={"a","b","c"}
set2={1,2,3}
set3=set1.union(set2)
print(set3)
