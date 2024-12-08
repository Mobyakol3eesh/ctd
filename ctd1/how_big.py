def how_big(numbers):
     numbers.sort()
     return (numbers[0], numbers[-1])


def main():
    numbers = []
    while(True):
          number = input("insert a number: ")
          if(number == "q"):
              smallest, largest = how_big(numbers)
              print(f"largest number is {largest}\n"+
                f"smallest number is {smallest}")
              break
          else:
              number = int(number)
              numbers.append(number)
        
main()