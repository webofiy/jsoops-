class user():
    #   all data here 
    def __init__(self,name,age  ) :
        self.name=name 
        self.age=age 

# all logic here 
    def showinfo(self):
        return f'your name is {self.name}  and your age is {self.age } '
   


   
me=user('waqas',24)

print(me.showinfo())



input("enter your name ")