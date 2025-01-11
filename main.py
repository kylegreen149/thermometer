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
        if isinstance(temp, int):
            converted_temp = int((temp - 32) * 5/9)
            print(f"{temp}° F is {converted_temp}° C!")
        break

def c_to_f():
    pass

choose_conversion_type()