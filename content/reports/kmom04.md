# Kmom 04 - Realtid

**Är du ny på realtidsprogrammering eller har du gjort liknande tidigare?**

Jag är helt ny på det här med realtid. Allt jag gjort tidigare har krävt sidomladdningar.

**Hur gick det att jobba med konceptet realtidsprogrammering i webben, några reflektioner?**

Det var inga direkta problem att komma igång. Hela det här med realtid känns som att det verkligen är framtiden och något som krävs mer och mer i
all webbutveckling. Speciellt i sidor med dynamiskt innehåll. Det var också förvånansvärt lätt att komma igång och skapa anslutningen mellan server och klient.

Modulen "ws" var också riktig användbar och underlättade verkligen skapandet av server och kommunikation mot klienten.

**Berätta om din chatt som du integrerade i redovisa-sidan.**

Min chatt liknar exemplen i artikeln. Jag använder "vanliga" WebSockets och modulen "ws" för att sköta kommunikationen mellan klient och server. Min tankegång är
att det är bättre att lära sig grunden med WebSockets innan jag lär mig något abstraktionslager som socket.io.

När man först går in på min chatt får man fylla i användarnamn/nick och klicka på anslut. Därefter sker anslutning till chat-servern och man tas till chattfönstret.
Min chattserver visar ens egna meddelanden och andras meddelanden samt användarnas nick. Chatten visar även när någon lämnar eller ansluter. Jag har valt att ta bort knapparna
för att ansluta och avsluta anslutningen då jag tycker det räcker med att anslutningen stängs när man går till en annan sida.

Chatten har även några kommandon som kan användas:

* /help - för att se möjliga kommandon
* /clients - för att se anslutna klienter

Jag strukturerade chatten i 3 filer som jag har placerat i min src-mapp:

* server.js - servern som importeras i app.js och startas
* client.js - klienten som används i min vy
* style.css - några enkla styles som hjälper till att styra över vad som syns när och inte

**Berätta om den realtidsfunktionalitet du väljer att integrera i din klient/server applikation.**

Som jag skrev i tidigar moment så har jag tänkt att ha dels ett chattfönster vid sidan och även en realtidsuppdatering av inlägg (fågelobeservationer).
Det här kommer, har jag märkt, kräva en hel del arbete med just WebSocket då jag har 2 samtidigt synliga men fristående delar som ska använda sig av samma anslutning.

Här kommer jag få tänka till och skriva 2 olika app-lager som arbetar mot respektive del och som separeras i server på något sätt. Jag tänker mig också att jag använder mig av inloggning på min sida
för att kunna skriva inlägg och använda chatten. Jag vill dock att en eller båda delarna ändå ska var synliga utan inloggning.

Fortfarande är mycket oklart och kan komma att förändras men jag har i alla fall börjat med att importera min chatt i min app trots att den inte har någon klient än.
