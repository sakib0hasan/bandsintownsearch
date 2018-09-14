# Bands In Town Search

## Features:
1. Input for artist name
2. Show Artist's Name, Picture, Facebook URL, Events
3. Styling
4. Caching using Service Worker
5. Facebook Style Content Loading
6. Unit testing

## Usage:
### Just run `npm i && ng serve` to start the server.
Please note, caching doesn't work on when running with 'ng serve'.
Please run the following commands to test caching:
``ng build --prod``
``http-server -p 8080 -c-1 dist/bandsintownsearch``
