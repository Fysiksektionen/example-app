# Example App
Det här en väldigt nedskalad version av en app eller service som kan köra på Fysikmotorn, sektionens server.

Den består av en frontend och en backend som kommunicerar med varanndra, och visar några av de mest grundläggande delarna av en app.

Frontenden är byggd med React, och det omvandlas till "static files". Dessa kan en server, Fysikmotorn, sedan skicka till en webbläsare när man går in på hemsidan.

Backenden körs i en Docker container för att säkerställa att det fungerar likadant på din dator som på servern. Den byggs ihop på Github!

För att Github ska bygga både en "release" med filerna från frontenden och ett "package" med en docker container från backenden, måste det skapas en tag.

I kommando raden görs det med "git tag v3.1.4" följt av "git push origin v3.1.4" där 3, 1, 4 kan bytas till godtyckliga siffror!
