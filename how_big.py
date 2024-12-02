def how_big(numbers):
     numbers.sort()
     return numbers[-1]


def main():
    numbers = []
    while(True):
          number = input("insert a number: ")
          if(number == "q"):
              print(how_big(numbers))
              break
          else:
              number = int(number)
              numbers.append(number)
        
main()