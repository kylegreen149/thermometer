def choose_conversion_type():
    while True:
        prompt = int(input("""Choose a prompt by pressing 1 or 2: 
        1) Fahrenheit to Celsius
        2) Celsius to Fahrenheit
        """))
        if prompt == 1:
            f_to_c()
            break
        elif prompt == 2:
            c_to_f()
            break
        else:
            print("Only enter the numbers '1' or '2'")      

def f_to_c():
    while True:
        temp = int(input("Enter the temperature you would like to convert from Fahrenheit to Celsius: "))
        converted_temp = int((temp - 32) * 5/9)
        print(f"{temp}°F is {converted_temp}°C!")
        print("")
        break

    while True:
        prompt = input("Do you wish to continue converting from Fahrenheit to Celsius (Y/N):")
        if prompt.upper() == "Y":
           f_to_c() 
        elif prompt.upper() == "N":
            choose_conversion_type()
        else:
            print("Enter 'Y' or 'N' only")
            continue

def c_to_f():
    while True:
        temp = int(input("Enter the temperature you would like to convert from Celsius to Fahrenheit: "))
        converted_temp = int((temp * 9/5) + 32)
        print(f"{temp}°C is {converted_temp}°F!")
        

choose_conversion_type()