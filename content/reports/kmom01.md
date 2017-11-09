# Kmom 01 - Express

Kul att äntligen få jobba med Javascript igen. Kul också att själv få en del valmöjligheter angående teknikval. Något som kan bli hur stort som helst. 

I valet och kvalet så kollade jag runt efter olika tekniker för att arbeta med min app. Att express skulle få vara kvar kändes rätt givet i och med att det finns med som en grund för hela kursmomentet och något som jag därmed tolkade som inte utbytbart. När det kommer till front-end så kollade jag runt på en hel del olika ramverk som finns. React, Angular och Vue bla. Medan de verkar intressanta så valde jag nu i början att använda mig av server-side rendering liknande Pug fast med Handlebars istället.

Samtidigt så förberedde jag även min express-server för att bli ett API och skapade 2 routes som skickar filinnehåll som JSON ur min content-katalog.

**Berätta utförligt om din syn på Express och Pug och hur de samverkar. Relatera till andra ramverk du jobbat med. Lyft fram de fördelar och eventuellt nackdelar du finner, eller bara notera skillnader och likheter.**

Nu använde jag mig inte av Pug för min app men väl Handlebars som är rätt snarlikt även om syntaxen är annorlunda. Anledningen till att jag valde Handlebars är att det liknar Laravel's blade motor som jag använde mig av i det individuella projektet och som jag tycker fungerar bra. Fördelen med dem är att man skriver sina sidor enligt vanlig html-kod och skickar in variabler med data där man vill ha dem. Detta till skillnad från Pug som blir som ytterligare ett nytt språk att lära sig.

När det kommer till dessa templatespråk så är dem rätt behändiga i och med att de tillåter att data skickas in i vyerna och man på så vis kan göra dem dynamiska. De möjliggör också uppdelning av vyerna i olika filer som sedan kan inkluderas på olika platser. 
  
**Berätta om din katalogstruktur och hur du organiserade din kod, hur tänkte du?**

Jag tittade på den scaffoldade versionen av express och tog lite inspiration därifrån samtidigt som jag mindes bakåt till ramverk1-kursen.

App körs igång och lever i "app.js". Mina routrar är utbruttna till egna filer och finns i en egen mapp "routes". Sen har jag mina vyer/mallar i mappan "views" och mina statiska filer (css, bilder, javascript) i mappen "public".

Jag har också en mapp "content" som där tanken är att jag placerar filer skrivna i markdown som jag sedan hämtar och parsar på rätt ställen.
  
**Använde du någon form av scaffolding som Express erbjuder?**

Ja och nej. Jag provade att scaffolda fram en app och kollade hur den var strukturerad och hämtade inspiration. Däremot skapade jag min app själv från scratch.
  
**Jobbar du med Markdown för innehållet, eller annat liknande?**

Både ja och nej. Jag har ett par sidor som är statiska och hårdkodade. Hem- och om-sidan. Sen har jag mina redovisningssidor som är skrivna i markdown och ligger i en egen katalog. Dessa sidor hämtas sen och parsas till HTML som sedan skickas till en vy "content" där de renderas.

Från början var jag ingen riktig fan av markdown utan tyckte mest det var krångligt. Men nu så här efter ett antal kurser där vi använt det så har jag ändrat mig och tycker nu att det går mycket snabbare och enklare att skriva längre texter i markdown än att hårdkoda in dem.