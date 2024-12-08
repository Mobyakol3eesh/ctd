
def calculate_temp(mode,temp):
    if(mode == 1):
        return f"Temp in Fahrenheit is {temp * 9/5 + 32}"
    elif(mode == 2):
        return f"Temp in Celisus is {(temp - 32) * 5/9}"
    else: 
        return "Invalid"

def main():
    print("Welcome to the temperature converter\n Mode 1: Celsius to Fahrenheit\n Mode 2: Fahrenheit to Celsius")
    try:
        temp = float(input("temp : "))
        mode = int(input("mode : "))
        print(calculate_temp(mode,temp))
    except(ValueError):
        print(">>>>Invalid Format<<<<\n--->Please enter a number<---")
        main()
main()