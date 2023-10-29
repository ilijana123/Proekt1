import sys
for dat in sys.argv:
 #   f=open(dat,"r")
#print(f.readline())
#f.close()
    f=open(dat,"r")
line=(f.read()).split('/')[0]
print(line)