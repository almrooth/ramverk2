# Kmom 06 - Egen modul

**Reflektera över vikten av infrastruktur för moduler för ett programmeringsspråk.**

En infrastuktur för publicering och distribuering av moduler är väldigt användbart och bra ur flera synvinklar. För det första underlättar det massor när man söker efter något att importera i ett projekt att bara behöva leta på ett eller ett fåtal platser. Tidsmässigt framförallt men också kan man få en snabb koll på vad som fungerar bra och vad som fungerar mindre bra i och med att man kan betygsätta och se antalet nedladdningar/implementationer som en modul har.

Att sen, som i npm's fall, ha ett program som håller koll på versioner och om det behövs uppdateringar samt vilka dependecies som en modul har är också något som är väldigt användbart och gör att man slipper sitta manuelt och ladda ner och installera många olika moduler själv.

Den här infrastrukturen som finns med moduler och som också låter vem som helst publicera sina egna moduler gör också att alla har en möjlighet att bidra med kod till alla. Man måste inte vara den som skriker högst/har mest resurser som får ut sin kod utan alla parter får en likartad chans.

**Vill du ge dig på att förklara att just npm är den tjänsten som växt snabbast av de modulerkataloger som presenteras på webbplatsen “Module Counts”?**

Att just npm har växt mest på "Module Counts" har nog att göra med att det är den primära modulinfrastrukturen för JavaScript. Det i kombination med att JavaScript har vuxit enormt mycket under det senaste åren tycker jag förklarar dess topposition.

**Reflektera över hur arbetet gick att välja, separera, publisera och sedan åter integrera module i din applikation.**

När jag skulle välja ut något att publicera som min egen modul som tänkte jag att det skulle vara något som jag kommer att kunna använda flera gånger senare. I förra kursmomentet så jobbade vi mot MongoDB och använde oss av CRUD. Där blir det mycket kod som kommer att behöva användas flera gånger om man har många olika saker att "CRUD:a" mot databasen. Då kändes det rätt naturligt att göra den delen av sidan till en modul.

Själva processen att skapa en modul av den var inga direkta problem. Jag hade lite problem med mitt CI-flöde då jag använder asynkrona funktioner i modulen och Scrutinizer körde en äldre version av Node. Efter lite pusslande fick jag in en senare kompatibel version där.

Jag försökte också göra heltäckande enhetstester för min modul och har än så länge kommit upp i 91%. Det som återstår att testa är en del felhantering men jag tänker mig att det kommer jag ha möjlighet att komplementera med i projektet där jag har för avsikt att använda modulen.

Själva publiceringen på npm och återintegreringen i mitt redovisa-sida var inga problem utan gick smärtfritt.

**Sista uppgiften om att dokumentera och färdigställa redovisa-sidan, tog det mycket tid eller hade du allt klart?**

Dokumentationen gick rätt snabbt då jag hade gjort det mesta allteftersom sidan har växt fram. Jag fick lite problem med att köra mina tester i olika docker-kontainrar av någn anledning. Lite oklart vad det berodde på men efter att ha byggt om dem och node_modules-mappen så hade det löst sig.

Docker har för mig krånglat lite till och från. Det kanske kan bero på att jag inte riktigt har koll på när det krävs att man bygger om kontainrarna eller om det bara är något slumpmässigt fel som uppstår.
