# Kmom 02 - Docker

**Har du jobbat med Docker eller andra virtualiseringstekniker innan?**

Innan den här kursen så är de enda tilfällena som jag använt mig av virtualisering de som vi hade under linuxkursen. Där körde vi Debian linux under Virtualbox i Windows och det kommer jag ihåg fungerade sådär. 

Just Docker är något jag hört talas om tidigare och sett nämnas lite här och där när det kommer till att snabbt få upp en fördefinierad miljö för utveckling eller produktion. Jaghar dock aldrig använd mig av eller tittat närmare på Docker innan nu.

**Hur ser du på möjligheterna att använda dig av Docker för att jobba med tester av ditt repo?**

Jag ser möjligheterna som väldigt goda och att Docker säkerligen kommer underlätta i en framtida utvecklingskarriär. Att snabbt kunna slänga upp flera olika miljöer och testa ens applikation i istället för att installera en massa olika program / OS gör det väldigt smidigt. Det gör också att det snabbt kommer gå att testa sin app för att se att den passar på flera variationer av programvara.

Ska jag titta på en kortare tidshorisont ala den här kursen så kan jag tänka mig att man kan slänga upp flera olika exempelvis node-versioner och automatiserat köra ens enhetstester på dem och se att man verkligen stödjer samtliga. Exempelvis ES5/ES6.

**Gick allt smidigt eller stötte du på problem?**

Jag hade en hel del problem med att få igång Docker från början. Jag kör Windows 10 Pro N 64-bit som därmed ska stödja Docker fullt ut. Jag lyckades installera Docker men sen bara fastnade det på "Starting Docker..." och kom inte vidare. Efter många ominstallationer och felsökningar av Docker, Hyper-V och annat samt läsande på Stack-overflow och andra platser gav jag upp. Jag installerade Docker vid Docker-toolbox och det gick väldigt smidigt. Inga problem här. Det som var lite annorlunda var att det inte går att anropa localhost utan containrarna "mountas" på någon annan IP-adress. Tack vare Kitematic som följde med vid installationen var det dock lätt att ta reda på vilken som var rätt IP-adress och därefter fungerade det på samma vis.

Själva användandet av Docker var inte så svårt. Jag följde övningen och gjorde sedan en liknande för node med version 7, 8 & 9. Jag tog här hjälp av dels Dockers dokumentation men även av nodejs egna docker-repo "docker-node" som vissade på flera bra tips.

**Skapade du din egen image, berätta om den?**

Nej det gjorde jag inte. På grund av tiden som gick åt att felsöka så hoppade jag över detta steg. Jag la istället mer tid på att läsa i dokumentationen och att testa runt med mina kontainrar.