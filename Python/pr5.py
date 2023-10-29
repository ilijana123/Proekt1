#!/usr/bin/python3
x=str("s1")
y=str(2)
z=str(3.0)
print(x,y,z)

a="Hello world"
print(a[1])

for x in "banana":
        print(x)

b="Hello, World" 
print(len(b))

txt="The best things in life are free!"
print("free" in txt)

c="Hello, World!"
print(b[2:5])
print(b.split(",")) 

print(c.upper())
print(c.lower())
print(c.strip())
print(c.replace("H","J"))

d="Hello"
e="World"
f=d + e
print(f)

age=36
txt="My name is John, and I am {}"
print(txt.format(age))