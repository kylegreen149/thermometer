# Temperature Conversion Program
This program allows users to convert temperatures between Fahrenheit and Celsius. Users can choose to convert from Fahrenheit to Celsius, from Celsius to Fahrenheit, or exit the program.

## How to Use
Run the program.

You will be prompted to choose a conversion type:

Press 1 to convert from Fahrenheit to Celsius.

Press 2 to convert from Celsius to Fahrenheit.

Press 3 to exit the program.

Follow the on-screen instructions to enter the temperature and see the converted result.

After each conversion, you will be asked if you wish to continue with the same conversion:

Enter Y to continue with the same conversion.

Enter N to return to the main menu and choose a different conversion type or exit.

Enter Y or N only when prompted.

## Functions
choose_conversion_type()
This function presents the main menu and allows the user to choose between three options:

Convert Fahrenheit to Celsius

Convert Celsius to Fahrenheit

Exit the program

f_to_c()
This function converts a temperature from Fahrenheit to Celsius. It prompts the user to enter the temperature, performs the conversion, and displays the result. After the conversion, it asks the user if they wish to continue converting temperatures. If the user chooses to continue, the function is called recursively.

c_to_f()
This function converts a temperature from Celsius to Fahrenheit. It prompts the user to enter the temperature, performs the conversion, and displays the result. After the conversion, it asks the user if they wish to continue converting temperatures. If the user chooses to continue, the function is called recursively.