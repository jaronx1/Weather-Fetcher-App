# Weather-Fetcher-App

This project was built using simple HTML, CSS AND JavaScript code. 
The script.js code file contains the JavaScript code that communicates the worker with the frontend. 
The "functions" file contains the script for the actual worker. 
The API used was from OpenWeatherMaps and provides real time weather updates of every major city in the world. 
The user inputs a city and the worker + api returns the request with the temperature, windspeed, humidity, and overhead conditions for the requested city. 
In the worker script I have used a specific command to output the data in the metric unit system. 

TESTING: 
The testing for this project was done using CloudFlare pages, because I have the worker code in a functions file CloudFlare automatically recognizes this as a worker and the API key is stored as environment variable which also encrypts the API key. 

CONCLUSION:
The project is a very simple example of how a serverless function works. I kept the code lightweight to demonstrate its efficiency and simplicity. 

