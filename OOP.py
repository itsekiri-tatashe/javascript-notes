# Object Oriented Programming

# Creating an Object
class Car:
    # Constructor method to initialize attributes
    def __init__(self, make, model, year, color):
        self.make = make  # Manufacturer of the car
        self.model = model  # Model of the car
        self.year = year  # Year of manufacture
        self.color = color  # Color of the car
        self.is_started = False  # Initially, the car is not started

    # Method to start the car
    def start(self):
        if not self.is_started:
            self.is_started = True
            print(f"The {self.color} {self.year} {self.make} {self.model} is now started.")
        else:
            print(f"The car is already running.")

    # Method to stop the car
    def stop(self):
        if self.is_started:
            self.is_started = False
            print(f"The {self.color} {self.year} {self.make} {self.model} is now turned off.")
        else:
            print(f"The car is already off.")

    # Method to change the color of the car
    def repaint(self, new_color):
        old_color = self.color
        self.color = new_color
        print(f"The car has been repainted from {old_color} to {new_color}.")

# Creating an instance (object) of the Car class
my_car = Car(make="Toyota", model="Corolla", year=2021, color="Blue")

# Interacting with the Car object
# print(f"My car details: {my_car.make} {my_car.model}, Year: {my_car.year}, Color: {my_car.color}")
# my_car.start()
# my_car.repaint("Red")
# my_car.stop()


# Inheritance
class Person:
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender

    
    def intro(self):
        print(f"Hey, My name is {self.name}, I am a {self.age} year old {self.gender}")

    def birthday(self):
        self.age += 1
        print(f"Happy birthday, {self.name}!!!!!!!")

    
eyimofe = Person("Eyimofe", 22, "Male")
jola = Person("Jola", 22, "Female")

class Employee(Person):
    def __init__(self, name, age, gender, department):
        super().__init__(name, age, gender)
        self.department = department

    def roll_call(self):
        print(f"I am {self.name}, and I am in the {self.department} department")

    def change_department(self, department):
        self.department = department


kanma = Employee("Kanma", 22, "Female", "Marketing")
kanma.intro()
kanma.roll_call()
kanma.change_department("Product")
kanma.roll_call()

















