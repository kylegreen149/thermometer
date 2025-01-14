# Temperature Conversion Program

A simple React-based temperature converter application that allows users to convert temperatures between Fahrenheit and Celsius. A Python version is also available!

## Features

- Convert temperatures from Fahrenheit to Celsius and vice versa.
- Displays the conversion result clearly.
- Responsive design that takes up 80% of the screen and is centered both vertically and horizontally.

## Installation of React Version

After cloning the repository, cd into the secondary folder "thermometer", and install the dependencies
```
cd thermometer
npm install
```
To view the site in your browser, run the 'npm start' command
```
npm start
```

## How to Use (React Version)
1. Select Conversion Type: Use the dropdown menu to select the type of conversion you want to perform

2. Enter the Temperature: Input the temperature you want to convert in the provided input field. Ensure it is a numerical value.

3. Convert Temperature: Click the "Convert Temperature" button to perform the conversion. The converted temperature will be displayed on the screen.


## How to Access and Use (Python Version)
If you used the React Version first, change directories to the previous folder:

```
cd ..
```

Then run the Python file using the following command, which will run in the terminal:

```
python main.py
```

You will be prompted to choose a conversion type:

- Press 1 to convert from Fahrenheit to Celsius.

- Press 2 to convert from Celsius to Fahrenheit.

- Press 3 to exit the program.

Follow the on-screen instructions to enter the temperature and see the converted result.

## Functions
### choose_conversion_type()
This function presents the main menu and allows the user to choose between three options:

- Convert Fahrenheit to Celsius

- Convert Celsius to Fahrenheit

- Exit the program

### f_to_c() and c_to_f()
These function converts a temperature from Fahrenheit to Celsius and Celsius to Fahrenheit, respectively. It prompts the user to enter the temperature, performs the conversion, and displays the result. After the conversion, it asks the user if they wish to continue converting temperatures. If the user chooses to continue, the function is called recursively.