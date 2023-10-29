#!/usr/bin/python3

#f = open("demo.txt", "rt")
#for x in f:
#   print(x)

#print(f.read())
#f.close

f1 = open("demo2.txt","a")
f1.write("\nnew text")
print(f1.tell())