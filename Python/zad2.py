import sys
dat1=open(sys.argv[1],"r")
dat2=open(sys.argv[2],"r")
dat3=open(sys.argv[3],"w")
s1=(dat1.read()).split("\n")
s2=(dat2.read()).split("\n")
ls1=len(s1)
ls2=len(s2)
if ls1>ls2:
    x=ls2
else:
    x=ls1
i=0
while i<x:
    dat3.write(s1[i] + "\n")
    dat3.write(s2[i] + "\n")
    print(s1[i])
    print(s2[i])  
    i=i+1
if ls1>x:
    print(s1[x])
else:
    print(s2[x])
