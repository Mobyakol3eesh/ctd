import random


def remove_from_bag(bag, number):
    bag.remove(number)
def add_to_bag(bag, number):
    bag.append(number)


def main():
    bag = [random.randint(1, 100) for _ in range(5)]
    while(True):
        print(f"Program Output: {bag}")
        try:
            res = input("User : ")
            if (res == 'remove'):
                if len(bag) > 5:
                    number = int(input("User : "))
                    remove_from_bag(bag, number)
                else:
                    print("Cannot remove, bag is at minimum capacity")
            elif (res == 'enter'):
                number = int(input("User : "))
                add_to_bag(bag, number)
            else:
                print("Please Enter a Valid Respone")
        except ValueError:
            print(">>>Please Enter a Number<<<")
            continue




main()
