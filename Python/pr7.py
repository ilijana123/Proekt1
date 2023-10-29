tlist=["apple","banana","cherry","orange","kiwi","mango"]
for x in tlist:
  print(x)
print('\n')

for i in range(len(tlist)):
  print(tlist[i])
print('\n')

[print(x) for  x in tlist]
print('\n')

tlist.sort()
print(tlist)

tlist.sort(reverse=True)
print(tlist)

mylist=tlist.copy()
print(mylist)

list1=["a","b","c"]
list2=[1,2,3]
list3=list1+list2
print(list3)