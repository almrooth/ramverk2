# Kmom 05 - Databas

**Hur gick det att komma igång med databasen MongoDB?**

Det var inga större problem att komma igång med kursmomentet. Jag började med att installera MongoDB lokalt på min dator och utvecklade CRUD-delen på min sida. Det blev ett bibliotek där man kan lägga till och ta bort böcker.

Därefter skapade jag och flyttade över appen och databasen till docker-kontainrarna.

På det hela gick det rätt smidigt så när som på lite strul med node-drivern för MongoDB som hade uppdaterats till en nyare version som betedde sig annorlunda gentemot tidigare. Löste det genom att installera den tidigare versionen istället och då flöt det på bra.

Riktigt smidigt att hela tiden kunna använda JSON överallt. Speciellt nu när vi kör ramverket i JavaScript.

**Vilken syn har du på databaser inom konceptet NoSQL?**

Jag har inte så mycket tidigare erfarenhet av NoSQL-databaser. Mest har jag hört talas om MongoDB och sett det figurera lite här och där på olika YouTube-klipp och artiklar.

Nu när jag fått testa på just MongoDB så känner jag att det är en trevlig bekantskap. Dels i det här fallet att kunna jobba med datat som JSON-objekt hela tiden men också att databasen inte är satt i sten efter att man skapat den och tabellerna. Ändrar man sig och vill lägga till eller ta bort något så är det inga problem medan man med en SQL-databas måste skapa om tabellerna.

**Reflektera över skillnader och likheter mellan relationsdatabaser och databaser inom NoSQL.**

Vad jag läst mig till så är SQL-databaser bättre när man har högre krav på datakonsistens och när man vill kunna göra kopplingar mellan tabeller och hantera relationer mellan olika data. Just att direkt i databasen med hjälp av SQL få fram en datapost och dess relationer är snabbt och smidigt. I en NoSQL-databas så får man istället koda den biten själv. Exempelvis hämta en datapost från en kollektion utefter vissa kriterer och sedan hämta en relaterad datapost från en annan med hjäölp av exempelvis id:et från den första posten. Fördelen här med NoSQL är att individuella frågor går snabbare än en SQL-databas.

Lite likheter finns ändå mellan de 2. I en NoSQL-databas kan man likställa en kollektion med en tabell och i MongoDB's fall ett dokument med en rad. Varje dokuemtn/rad innehåller data linande nycklar och värden. Kolumn/cell eller JSON key-value. Här har vi dock återigen en skillnad mellan de 2. I en SQL-databas så har varje rad samma kolumner medan i en NoSQL-databas verje dokuement inte behöver ha samma nyckel-värde-par.

**Vilka är dina tankar om asynkron programmering med JavaScript?**

Just promises har jag tyckt och tycker fortfarande är lite kneppigt att greppa. Dock med introduktionen av async/await så blir det rätt mycket smidigare att hantera funktioner/metoder som returnerar promises då man inte behöver hålla på med .then/.catch etc.

Det asynkrona kan jag tycka är bra att ha möjlighet att använda också i JavaScript. Speciellt tydligt blev det under detta moment då man vill hämta data ur en databas och vänta tills man fått den innan man går vidare och renderar siden exempelvis. Då är det rätt så smidigt att ändå kunna använda sig av det asynkrona sättet.

Däremot tänker jag mig att synkron exekvering av program egentligan är bättre då programmet delas upp i olika delar och körs parallellt. Synkrona program borde därmed vara snabbare än asynkrona.

En ytterliggare fördel med synkront är att man inte behöver invänta att allt körs klart innan man går vidare och exempelvis visar en webbsida. Här krävs dock att man har möjlighet att refresha sidan om nya data kommer.

**Hur känner du för Docker och det sättet vi jobbar med tjänster i kontainrar?**

Det känns fortfarande lite struligt om än klarare och klarare. Under detta moment så var det inga direkta problem med mina kontainrar. Som jag nämt tidigare så är det bra att kunna utveckla för en specifik miljö som man sedan vet att man kan reproducera enkelt. Dels om man har fler autvecklare i ett projekt eller om man vill kunna köra sitt program på flera olika maskiner. Docker gör det lätt att se till att alla inblandade då har samma förutsättningar att köra koden.
