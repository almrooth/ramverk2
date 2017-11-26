# Kmom 03 - Test

**Berätta vilka tekniker/verktyg du valde för enhetstester och kodtäckning och varför?**

Jag höll mig här nästan bara till de tekniker som gicks igenom under övningarna under kursmomentet. Dvs. Istanbul för kodtäckning och Mocha för enhetstester. Just Mocha känns som ett stort och välanvänt testramverk vilket får det att kännas som användbart att kunna.

Det jag la till utöver Mocha och Istanbul var Supertest för att testa mina routes och mitt api. Tack var de exempel som fanns i dess repo så var det rätt lätt att skapa några testfall för det.

**Berätta om cin CI-kedja och reflektera över de valen du gjorde?**

I min CI-kedja så använder jag mig först och främst av CircleCI som byggtjänst. Av någon anledning så har jag fastnat för den före Travis. Smidigt, snabbt och lätt att se om ens tester går igenom eller inte efter varje push.

Därefter använder jag mig främst av Scrutinizer för kodkvalitet och kodtäckning. Just Scrutinizer tycker jag är enkelt, bra och smidigt då det analyserar båda delarna av koden. Dessutom ger den bra feedback och förslag på vad i vilka filer som kan förbättras.

Som ett ytterligare verktyg har jag använt mig av Code Climate i min redovisa-sida. Här har jag dock inte fått kodtäckningen att fungera så därav använder jag den än så länge inte till min app.

**Reflektera över hur det gick att integrera enhetstesterna i olika Docker-kontainerns och om du ser någon nytta med detta.**

Det var inga direkta konstigheter att köra enhetstesterna i Dockerkontainrarna. Jag följde övningsexemplet och det gick smidigt. Det här kan jag se som väldigt användbart när det kommer till att testa om ens kod är kompatibel med flera olika verisioner av system och mjukvara. I det här fallet med node i olika versioner. Kanske inte när det kommer till mindre appar som snabbt sätts upp och kan modifieras men speciellt när man jobbar i större system som behöver/kommer köras under lång tid och/eller behöver vara kompatibla med flera olika system och versioner av mjukvara.

**Hur väl lyckades du utvärdera TDD-konceptet och vilka är dina reflektioner?**

Det känns rätt ovant att skriva testerna först än så länge. Jag gjorde det mestadels när jag skapade routrarna till mitt kommande API. Det som jag ser som en stor fördel med att göra på det här viset är att jag verkligen tänker till och skriver koden så den blir lätt att testa. Istället för att skriva en massa komplicerade kod som sen visar sig vara svårtestad och behöver skrivas om.

Speciellt nyttigt tror jag det här är i lite större organisationer där man har som krav och arbetssätt att testa all kod. I och med att koden från början skrivs testbar så sparar man in på tid som annars skulle gått åt att skriva om koden så att den blir det.

**Berätta om tankarna kring din klient/server applikation och nämn de tekniker du använder.**

Det har varit riktigt kneppigt att komma på en bra ide till en app att börja jobba på. Det som jag vill ha är dels ett API och någon form av klient. Här har jag inte bestämt mig hur jag ska skapa klienten ännu eller om jag kanske skippar den biten och bara kör i express istället. Vi får se...

Idén till appen är i alla fall en app/sida för fågelskådare där man på en och samma sida får en översikt över fåglar som siktats. Användare kan sedan lägga till nya siktrapporter som då automatiskt ploppar upp i översikten. Utöver detta vill jag ha en sektion för chatt vid sidan av där man kan föra disskutioner om siktade fåglar. 

Jag får se om detta fortsatt kommer kännas som rimligt i kommande kursmoment eller om det blir för stort/litet.
