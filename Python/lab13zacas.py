import sys
l=len(sys.argv)
if l < 2:
  print("Greska")
else:
  i=0
  mlist=[]
  for dat in sys.argv:
    print("Argumenti od komandna linija", dat)
    mlist.insert(i,sys.argv[i])
    i=i+1
  print("Prvicna lista:", list)
  list1=mlist.copy()
  m=0
  n=l-1
  while m<l // 2:
    if list1[m]!=mlist[n]:
      temp=list1[m]
      list1[m]=mlist[n]
      list1[n]=temp
      m=m+1
      n=n-1

  print("Nova lista:", list1)
  
f = open("demofile.txt", "w")
j=0
while j<l:
    f.write(str(list1[j])+"\n")
    j=j+1
f.close()
